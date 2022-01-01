const router = require("express").Router();
const pool = require("../database");
const authorization = require("../middleware/authorization");

//retornar os dados de todos os livros que possuem quantidade > 0
router.get("/", async (req, res) => {
  try {
    //recuperando produtos
    const produtos = await pool.query(
      "select l.id,l.descricao,l.preco,l.foto,l.quantidade,l.autor,l.editora,l.ano"+
      " from livro as l where l.quantidade> 0 order by l.descricao ASC",
      []
    );
    res.json(produtos.rows);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});


//retornar as categorias existentes
router.get("/categoria", async (req, res) => {
  try {
    const categoria = await pool.query(
      "SELECT * FROM categoria as c",
      []
    );
    res.json(categoria.rows);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});


//retornar os dados de um livro unico de acordo com o id
router.get("/:id", async (req, res) => {
  try {
    //recuperando produto com o id
    const {id} = req.params;
    const produtoUnico = await pool.query(
      "select l.id,l.descricao,l.preco,l.foto,l.quantidade,l.autor,l.editora,l.ano" +
      " from livro as l where l.id = $1",
      [id]
    );
    res.json(produtoUnico.rows[0]);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});


//retornar a(as) categoria(as) associadas a um unico livro
router.get("/categoria/:id", async (req, res) => {
  try {
    //recuperando categoria com o id
    const {id} = req.params;
    const produtoCategoria = await pool.query(
      "select c.descricao as categoria" +
      " from livro as l, categoria as c, livro_categoria as lc where l.id = lc.id_livro and c.id = lc.id_categoria and l.id = $1",
      [id]
    );
    res.json(produtoCategoria.rows);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;