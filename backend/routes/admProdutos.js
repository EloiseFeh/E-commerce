const router = require("express").Router();
const pool = require("../database");
const authorization = require("../middleware/authorization");

//consulta de todos os livros cadastrados
router.get("/consulta", async (req, res) => {
    try {
        //recuperando produtos
        const produtosAdm = await pool.query(
        "select l.id,l.descricao,l.preco,l.foto,l.quantidade,l.autor,l.editora,l.ano"+
        " from livro as l order by l.id ASC",
        []
        );
        res.json(produtosAdm.rows);
        

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//inserção de um novo livro
router.post("/novo", async(req,res) => {
    try {
        //desestruturar req body
        const {descricao,preco,foto,quantidade,autor,editora,ano} = req.body;
        
        //verificar se já existe
        const produtoExiste = await pool.query("SELECT * from livro where descricao = $1",
        [descricao]);
        if(produtoExiste.rows.length!==0){
            return res.status(401).json("Livro já existe!");
        }

        //entrar o novo produto no banco
        const novoProduto = await pool.query(
            "INSERT into livro (descricao,preco,foto,quantidade,autor,editora,ano) values ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
            [descricao,preco,foto,quantidade,autor,editora,ano]
        );
        res.json("Livro Inserido");

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//consultar os dados de um livro unico de acordo com o id
router.get("/consulta/:id", async (req, res) => {
    try {
        //recuperando produto com o id
        const {id} = req.params;
        const produtoUnicoAdm = await pool.query(
            "select l.id,l.descricao,l.preco,l.foto,l.quantidade,l.autor,l.editora,l.ano" +
            " from livro as l where l.id = $1",
            [id]
        );
        res.json(produtoUnicoAdm.rows[0]);
  
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//update da descricao de um unico livro
router.post("/descricao/:id", async(req,res) => {
    try{
        //recuperar id atual e desestruturar req body
        const {id} = req.params;
        const {descricao,preco,foto,quantidade,autor,editora,ano} = req.body;
      
        //verificar se já existe uma descricao igual
        const descricaoExiste = await pool.query("SELECT * from livro where descricao = $1",
        [descricao]);
        if(descricaoExiste.rows.length!==0){
            return res.status(401).json("Essa descrição já pertence a outro livro");
        }

        //fazer a operacao de update da descricao
        const novaDescricao = await pool.query(
            "UPDATE livro SET descricao = $1 where id = $2",
            [descricao,id]
        );
        res.json("Descricao Alterada");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//update do preco de um produto
router.post("/preco/:id", async(req,res) => {
    try{
        //recuperar id atual e desestruturar req body
        const {id} = req.params;
        const {descricao,preco,foto,quantidade,autor,editora,ano} = req.body;
      
        //fazer a operacao de update do preco
        const novoPreco = await pool.query(
            "UPDATE livro SET preco = $1 where id = $2",
            [preco,id]
        );
        res.json("Preco Alterado");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//update da foto de um livro
router.post("/foto/:id", async(req,res) => {
    try{
        //recuperar id atual e desestruturar req body
        const {id} = req.params;
        const {descricao,preco,foto,quantidade,autor,editora,ano} = req.body;
      
        //fazer a operacao de update da foto
        const novaFoto = await pool.query(
            "UPDATE livro SET foto = $1 where id = $2",
            [foto,id]
        );
        res.json("Foto Alterada");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//update da quantidade de um livro
router.post("/quantidade/:id", async(req,res) => {
    try{
        //recuperar id atual e desestruturar req body
        const {id} = req.params;
        const {descricao,preco,foto,quantidade,autor,editora,ano} = req.body;
      
        //fazer a operacao de update do preco
        const novaQuantidade = await pool.query(
            "UPDATE livro SET quantidade = $1 where id = $2",
            [quantidade,id]
        );
        res.json("Quantidade Alterada");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//update do autor(a) de um livro
router.post("/autor/:id", async(req,res) => {
    try{
        //recuperar id atual e desestruturar req body
        const {id} = req.params;
        const {descricao,preco,foto,quantidade,autor,editora,ano} = req.body;
      
        //fazer a operacao de update do autor(a)
        const novoAutor = await pool.query(
            "UPDATE livro SET autor = $1 where id = $2",
            [autor,id]
        );
        res.json("Autor(a) Alterado(a)");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//update da editora de um livro
router.post("/editora/:id", async(req,res) => {
    try{
        //recuperar id atual e desestruturar req body
        const {id} = req.params;
        const {descricao,preco,foto,quantidade,autor,editora,ano} = req.body;
      
        //fazer a operacao de update da editora
        const novaEditora = await pool.query(
            "UPDATE livro SET editora = $1 where id = $2",
            [editora,id]
        );
        res.json("Editora Alterada");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//update do ano de um livro
router.post("/ano/:id", async(req,res) => {
    try{
        //recuperar id atual e desestruturar req body
        const {id} = req.params;
        const {descricao,preco,foto,quantidade,autor,editora,ano} = req.body;
      
        //fazer a operacao de update do ano
        const novoAno = await pool.query(
            "UPDATE livro SET ano = $1 where id = $2",
            [ano,id]
        );
        res.json("Ano Alterado");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//deletar um livro
router.delete("/excluir/:id", async(req,res) => {
    try{
        //recuperar id atual 
        const {id} = req.params;
    
        //fazer a operacao de delete usando o id
        const deletarLivro = await pool.query(
            "DELETE FROM livro WHERE id = $1",
            [id]
        );
        res.json("Livro excluido, voltando para o painel de consulta..");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


////////////////////////////////////////// RELAÇÃO PRODUTO-CATEGORIA ///////////////////////////////////////////

//retornar as categorias existentes
router.get("/categorias", async (req, res) => {
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


//retornar as categorias que pertencem a um só livro
router.get("/categoria/:id", async (req, res) => {
    try {
      //recuperando categoria com o id
      const {id} = req.params;
      const produtoCategoria = await pool.query(
        "select c.id,c.descricao as categoria" +
        " from livro as l, categoria as c, livro_categoria as lc where l.id = lc.id_livro and c.id = lc.id_categoria and l.id = $1",
        [id]
      );
      res.json(produtoCategoria.rows);
  
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error!");
    }
});


//adicionar uma categoria a um livro especifico
router.post("/categoria/add/:id", async(req,res) => {
    try {
        //desestruturar req body
        const {id_livro, id_categoria} = req.body;
        const {id} = req.params;

        //verificar se já existe
        const catExisteNesseProduto = await pool.query("select * from livro_categoria where id_livro = $1 and id_categoria = $2",
        [id,id_categoria]);
        if(catExisteNesseProduto.rows.length!==0){
            return res.status(401).json("Esse livro já possui essa categoria!");
        }

        //entrar a nova categoria para o produto
        const novaCategoriaProduto = await pool.query(
            "insert into livro_categoria (id_livro,id_categoria) values ($1,$2) RETURNING *",
            [id,id_categoria]
        );
        res.json("Categoria inserida ao livro");

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//excluir uma categoria associada a um livro especifico
router.delete("/categoria/excluir/:id", async(req,res) => {
    try{
        //recuperar id atual 
        const {id} = req.params;
        const {id_livro, id_categoria} = req.body;

        //fazer a operacao de delete usando o id
        const deletarCategoriaProduto = await pool.query(
            "delete from livro_categoria where id_livro = $1 and id_categoria = $2",
            [id,id_categoria]
        );
        res.json("Categoria do livro excluida!");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

module.exports = router;