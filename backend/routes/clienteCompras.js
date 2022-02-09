const router = require("express").Router();
const pool = require("../database");
const authorization = require("../middleware/authorization");

//consulta de compras do cliente logado
router.get("/",authorization, async (req, res) => {
    try {

      const minhasCompras = await pool.query(
        "select v.id, v.data_hora,string_agg(l.descricao || ' ' || vl.quantidade ||'x ('|| l.preco|| ' /unid)' , ', ') as livros, sum(l.preco * vl.quantidade) as total "+ 
        "from venda as v, livro as l, venda_livro as vl where v.id_usuario = $1 and v.id = vl.id_venda and vl.id_livro = l.id " +
        "group by v.id,v.data_hora "+
        "order by data_hora DESC",
        [req.user.id]
      );
      res.json(minhasCompras.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error!");
    }
});

router.post("/comprar", authorization, async(req,res) => {
  try {
    //1 - inserir usuario e data da venda
    const compraCarrinho = await pool.query(
      "insert into venda (id_usuario,data_hora) values ($1,current_timestamp)",
      [req.user.id]
    );

    //2- retornar o id da venda que foi inserida agora
    const compraFeita = await pool.query(
      "select id from venda where id_usuario = $1 order by id desc LIMIT 1",
      [req.user.id]
    );
    console.log("id da venda: "+ compraFeita.rows[0].id);

    //3- inserir todas as rows dos livros
    const {cartItems} = req.body;
    console.log("tamanho de livros no carrinho:" + cartItems.length);

    for(i=0;i<cartItems.length;i++){

      const compraLivros = await pool.query(
        "insert into venda_livro (id_venda,id_livro,quantidade) values ($1,$2,$3)",
        [compraFeita.rows[0].id,cartItems[i].id,cartItems[i].quantity]
      );

      //4-quantidade (decrementar do estoque)
      const decrementarEstoque = await pool.query(
        "update livro set quantidade = quantidade - $1 where id = $2",
        [cartItems[i].quantity,cartItems[i].id]
      );
    }
    
    
    res.json("Venda feita! Livros adicionados!");
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }

});

module.exports = router;
