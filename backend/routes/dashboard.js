const router = require("express").Router();
const pool = require("../database");
const authorization = require("../middleware/authorization");

router.get("/:id", authorization, async (req, res) => {
  
  try {
    //infos do usuario
    const user = await pool.query(
      "SELECT * FROM usuario WHERE id = $1",
      [req.user.id]
    );
    res.json(user.rows[0]);

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;