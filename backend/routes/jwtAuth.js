const router = require("express").Router();
const pool = require("../database");
const jwtGenerator = require("../utils/jwtGenerator");
//const bcrypt = require('bcrypt');
const authorization = require('../middleware/authorization')

//register router
router.post("/register", async(req,res) => {

    try {

        //desestruturar req body
        const {nome,endereco,email,login,senha,administrador} = req.body;
        
        //verificar se já existe
        const user = await pool.query("SELECT * from usuario where login = $1",
        [login]);
        if(user.rows.length!==0){
            return res.status(401).json("Usuário já existe!");
        }

        //bcrypt a senha (deixa pra lá!!)
        //const saltRound = 10;
        //const salt = await bcrypt.genSalt(saltRound);
        //const bcryptPassword = await bcrypt.hash(senha,salt);
        // no new user, no lugar de senha colocar bcryptPassword

        //entrar o user no banco
        const newUser = await pool.query(
            "INSERT into usuario (nome,endereco,email,login,senha,administrador) values ($1,$2,$3,$4,$5,$6) RETURNING *",
            [nome,endereco,email,login,senha,administrador]
        );

        //gerar token de validacao
        const token = jwtGenerator(newUser.rows[0].id);
        res.json({token});


    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
})


//login router
router.post("/login", async(req,res) => {
    try {
        
        //desestruturar req body
        const {nome,endereco,email,login,senha,administrador} = req.body;

        //chegar se o usuario existe, se não, retornar erro
        const user = await pool.query("SELECT * from usuario where login = $1",
        [login]);
        if(user.rows.length===0){
            return res.status(401).json("A senha ou o email estão incorretos");
        }

        //checar se a senha é a mesma do banco
        //const validPassword = await bcrypt.compare(senha,user.rows[0].senha);
        //console.log(validPassword);
        //if(!validPassword){
        if(await senha !== user.rows[0].senha){
            return res.status(401).json("A senha ou o email estão incorretos");
        }

        //atribuir um token de autorizacao
        const token = jwtGenerator(user.rows[0].id);
        res.json({token});


    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
})


//router de acesso a area do usuario
router.get("/is-verify", authorization, async(req,res) => {
    try {
        res.json(true);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error!");
    }
})

module.exports = router;