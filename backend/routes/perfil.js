const router = require("express").Router();
const pool = require("../database");
const authorization = require("../middleware/authorization");

//retornar os dados atuais do usuario
router.get("/:id", async (req, res) => {
  try {
    //recuperando com o id
    const {id} = req.params;
    const dadosUsuario = await pool.query(
      "select nome,endereco,email,senha" +
      " from usuario where id = $1",
      [id]
    );
    res.json(dadosUsuario.rows);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});


//mudança de nome 
router.post("/nome/:id", async(req,res) => {
  try{
    //recuperar id atual e desestruturar req body
    const {id} = req.params;
    const {nome,endereco,email,login,senha,administrador} = req.body;
    
    //fazer a operacao de update do nome
    const newNome = await pool.query(
      "UPDATE usuario SET nome = $1 where id = $2",
      [nome,id]
    );
    res.json("Nome Alterado");

  } catch(err){
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});


//mudança de endereço
router.post("/endereco/:id", async(req,res) => {
  try{
    //recuperar id atual e desestruturar req body
    const {id} = req.params;
    const {nome,endereco,email,login,senha,administrador} = req.body;
    
    //fazer a operacao de update do endereco
    const newEndereco = await pool.query(
      "UPDATE usuario SET endereco = $1 where id = $2",
      [endereco,id]
    );
    res.json("Endereco Alterado");

  } catch(err){
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});


//mudança de email
router.post("/email/:id", async(req,res) => {
  try{
    //recuperar id atual e desestruturar req body
    const {id} = req.params;
    const {nome,endereco,email,login,senha,administrador} = req.body;
    
    //fazer a operacao de update do email
    const newEmail = await pool.query(
      "UPDATE usuario SET email = $1 where id = $2",
      [email,id]
    );
    res.json("Email Alterado");

  } catch(err){
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});


//mudança de senha
router.post("/senha/:id", async(req,res) => {
  try{
    //recuperar id atual e desestruturar req body
    const {id} = req.params;
    const {nome,endereco,email,login,senha,administrador} = req.body;
    
    //fazer a operacao de update da senha
    const newSenha = await pool.query(
      "UPDATE usuario SET senha = $1 where id = $2",
      [senha,id]
    );
    res.json("Senha Alterada");

  } catch(err){
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});


//excluindo a conta
router.delete("/excluir/:id", async(req,res) => {
  try{
    //recuperar id atual 
    const {id} = req.params;

    //fazer a operacao de delete usando o id
    const deletar = await pool.query(
      "DELETE FROM usuario WHERE id = $1",
      [id]
    );
    res.json("Conta excluída, realizando logout agora");

  } catch(err){
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});


module.exports = router;