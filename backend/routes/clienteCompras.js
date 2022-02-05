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


module.exports = router;
