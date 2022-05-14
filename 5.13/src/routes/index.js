const router = require("express").Router();
const db = require("../services/dbsqlite");

router.get("/", (req, res) => {
  const sql = "SELECT * FROM Todos ORDER BY Title";
  db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);

    res.render("index", { model: rows });
  });
});

router.get("/create", (req, res) => {
  res.render("create", { model: {} });
});
router.post("/create", (req, res) => {
  const sql = "INSERT INTO Todos (Title) VALUES (?)";
  const todo = [req.body.Title];

  db.run(sql, todo, (err) => {
    if (err) return console.error(err.message);

    res.redirect("/");
  });
});

router.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  const edit = `SELECT * FROM Todos WHERE ID = ?`;
  db.get(edit, params, (err, row) => {
    if (err) return console.error(err.message);

    res.render("edit", { model: row });
  });
});

router.post('/edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE Todos SET Title = ? WHERE ID = ${id}`;
    const todo = [req.body.Title]

    db.run(sql, todo, (err) => {
        if(err) return console.error(err.message)
        
        res.redirect('/')
    })
})

router.post('/delete/:id', (req, res) => {
    const sql = "DELETE FROM Todos WHERE ID = ?";
    const id = req.params.id;
    
    db.run(sql, id, (err) => {
        if(err) return console.error(err.message)

        res.redirect('/')
    })
})

module.exports = router;
