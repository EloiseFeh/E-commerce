const router = require("express").Router();
const pool = require("../database");
const authorization = require("../middleware/authorization");

//retornar os dados atuais do usuario
router.get("/",authorization, async (req, res) => {
  try {
    //recuperando com o id
    const dadosUsuario = await pool.query(
      "select nome,endereco,email,senha" + " from usuario where id = $1",
      [req.user.id]
    );
    res.json(dadosUsuario.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

//mudança de nome
router.post("/nome",authorization, async (req, res) => {
  try {
    //desestruturar req body
    const { nome, endereco, email, login, senha, administrador } = req.body;

    //fazer a operacao de update do nome
    const newNome = await pool.query(
      "UPDATE usuario SET nome = $1 where id = $2",
      [nome, req.user.id]
    );
    res.json("Nome Alterado");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

//mudança de endereço
router.post("/endereco",authorization, async (req, res) => {
  try {
    //desestruturar req body
    const { nome, endereco, email, login, senha, administrador } = req.body;

    //fazer a operacao de update do endereco
    const newEndereco = await pool.query(
      "UPDATE usuario SET endereco = $1 where id = $2",
      [endereco, req.user.id]
    );
    res.json("Endereco Alterado");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

//mudança de email
router.post("/email",authorization, async (req, res) => {
  try {
    //desestruturar req body
    const { nome, endereco, email, login, senha, administrador } = req.body;

    //fazer a operacao de update do email
    const newEmail = await pool.query(
      "UPDATE usuario SET email = $1 where id = $2",
      [email, req.user.id]
    );
    res.json("Email Alterado");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

//mudança de senha
router.post("/senha",authorization, async (req, res) => {
  try {
    // desestruturar req body
    const { nome, endereco, email, login, senha, administrador } = req.body;

    //fazer a operacao de update da senha
    const newSenha = await pool.query(
      "UPDATE usuario SET senha = $1 where id = $2",
      [senha, req.user.id]
    );
    res.json("Senha Alterada");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

//excluindo a conta
router.delete("/excluir",authorization, async (req, res) => {
  try {
    //fazer a operacao de delete usando o id
    const deletar = await pool.query("DELETE FROM usuario WHERE id = $1", [req.user.id]);
    res.json("Conta excluída, realizando logout agora");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
