const router = require("express").Router();
const pool = require("../database");
const authorization = require("../middleware/authorization");
const multer = require('multer');

//onde armazenar o upload e com que nome
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads');
    },
    filename: function(req,file,cb){
        cb(null,file.originalname);
    }
})

//filtro para aceitar só jpg e png
const filtro = (req,file,cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null,true);
    } else {
        cb(null,false);
    }
};

const upload = multer({
    storage:storage,
    fileFilter:filtro
});

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
router.post("/novo",upload.single('productImage'), async(req,res) => {
    try {
        //desestruturar req body
        const {descricao,preco,foto,quantidade,autor,editora,ano} = req.body;

        const {path} = req.file;
        realPath = __dirname + path;
        
        //verificar se já existe
        const produtoExiste = await pool.query("SELECT * from livro where descricao = $1",
        [descricao]);
        if(produtoExiste.rows.length!==0){
            return res.status(401).json("Livro já existe!");
        }

        //entrar o novo produto no banco
        const novoProduto = await pool.query(
            "INSERT into livro (descricao,preco,foto,quantidade,autor,editora,ano) values ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
            [descricao,preco,path,quantidade,autor,editora,ano]
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

module.exports = router;