const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const cors = require("cors");
const pool = require("./database")

/*router.get('/', function(req,res){
    res.sendFile(path.resolve('../front', 'src','views', 'home.js'));
})
app.use('/',router);
*/
app.use(cors());
app.use(express.json());


//adiciona novo usuario
app.post("/",async(req,res) => {
    try {
        const newUser = await pool.query(
            "INSERT into usuario (nome,endereco,email,login,senha,administrador) values ($1,$2,$3,$4,$5,$6) RETURNING *",
            [req.body.nome,req.body.endereco,req.body.email,req.body.login,req.body.senha,req.body.administrador]
        );
        res.json(newUser.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//ver todos os usuarios
app.get("/all",async(req,res) =>{
    try {
        const users = await pool.query("SELECT * from usuario");
        res.json(users.rows);
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(process.env.PORT || 5000);
console.log("server on!");