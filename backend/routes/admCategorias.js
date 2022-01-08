const router = require("express").Router();
const pool = require("../database");
const authorization = require("../middleware/authorization");

//consultar lista de categorias existentes
router.get("/consulta", async (req, res) => {
    try {
        //recuperando produtos
        const categoriaAdm = await pool.query(
        "select * from categoria",
        []
        );
        res.json(categoriaAdm.rows);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//criar nova categoria
router.post("/novo", async(req,res) => {
    try {
        //desestruturar req body
        const {descricao} = req.body;
        
        //verificar se já existe
        const categoriaExiste = await pool.query("SELECT * from categoria where descricao = $1",
        [descricao]);
        if(categoriaExiste.rows.length!==0){
            return res.status(401).json("Categoria já existe!");
        }

        //entrar a nova categoria no banco
        const novaCategoria = await pool.query(
            "INSERT into categoria (descricao) values ($1) RETURNING *",
            [descricao]
        );
        res.json("Categoria Inserida");

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//consultar os dados de uma categoria unica de acordo com o id
router.get("/consulta/:id", async (req, res) => {
    try {
        //recuperando produto com o id
        const {id} = req.params;
        const categoriaUnicaAdm = await pool.query(
            "select descricao" +
            " from categoria where id = $1",
            [id]
        );
        res.json(categoriaUnicaAdm.rows[0]);
  
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//update da descricao de uma categoria de acordo com o id
router.post("/descricao/:id", async(req,res) => {
    try{
        //recuperar id atual e desestruturar req body
        const {id} = req.params;
        const {descricao} = req.body;
      
        //verificar se já existe uma descricao igual
        const descricaoCatExiste = await pool.query("SELECT * from categoria where descricao = $1",
        [descricao]);
        if(descricaoCatExiste.rows.length!==0){
            return res.status(401).json("Essa categoria já existe");
        }

        //fazer a operacao de update da descricao
        const novaCategoria = await pool.query(
            "UPDATE categoria SET descricao = $1 where id = $2",
            [descricao,id]
        );
        res.json("Categoria Alterada");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});


//deletar uma categoria
router.delete("/excluir/:id", async(req,res) => {
    try{
        //recuperar id atual 
        const {id} = req.params;
    
        //fazer a operacao de delete usando o id
        const deletarCategoria = await pool.query(
            "DELETE FROM categoria WHERE id = $1",
            [id]
        );
        res.json("Categoria excluida, voltando para o painel de consulta..");
  
    } catch(err){
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
});

module.exports = router;