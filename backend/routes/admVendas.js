const router = require("express").Router();
const pool = require("../database");


//lista dos clientes (pra ver o id e usar no input)
router.get("/listaClientes", async (req, res) => {
    try {
        
        const listaClientes = await pool.query(
        "select id,nome from usuario where administrador = false order by id",
        []
      );
      
      res.json(listaClientes.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error!");
    }
});


//ver as vendas realizadas por determinado cliente
router.post("/cliente", async (req, res) => {
    try {
        // id que vai ser pegue por input
        const {id_usuario} = req.body;
        
        const VendasAoUsuario = await pool.query(
        "select v.id, v.data_hora,string_agg(l.descricao || ' ' || vl.quantidade ||'x ('|| l.preco|| ' /unid)' , ', ') as livros, sum(l.preco * vl.quantidade) as total "+ 
        "from venda as v, livro as l, venda_livro as vl where v.id_usuario = $1 and v.id = vl.id_venda and vl.id_livro = l.id " +
        "group by v.id,v.data_hora "+
        "order by data_hora DESC",
        [id_usuario]
      );
      
      res.json(VendasAoUsuario.rows);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error!");
    }
});


//deletar venda e retornar quantidade de livros da venda ao estoque
router.delete("/cliente/excluirVenda/:id", async(req,res) => {
    try{
        //recuperar id atual (ESSE ID É DA VENDA)
        const {id} = req.params;

        //retornar livros e quantidades da venda
        const retomarEstoque = await pool.query(
            "select vl.id_livro,vl.quantidade "+
            "from venda as v, livro as l, venda_livro as vl where v.id= $1 and v.id = vl.id_venda and vl.id_livro = l.id "+
            "order by data_hora DESC",
            [id]
        );

        //adicionar quantidades vendidas ao estoque, já que foram canceladas
        for(i=0;i<retomarEstoque.rowCount;i++){
            const updateLivros = await pool.query(
                "update livro set quantidade = quantidade + $1 where id = $2",
                [retomarEstoque.rows[i].quantidade,retomarEstoque.rows[i].id_livro]
            );
        }
        
        //fazer a operacao de delete da venda usando o id dela
        const deletarVenda = await pool.query(
            "delete from venda where id = $1",
            [id]
        );
        
        res.json("Os livros que haviam sido vendidos voltaram ao estoque e a venda foi excluida");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


module.exports = router;