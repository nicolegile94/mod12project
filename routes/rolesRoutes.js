const express = require('express');
const router = express.Router();
const db = require('../db/database');

//get roles
router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM role`;
    const params = [];
    db.all(sql, params, (err, rows) => {
        if(err) {
            res.status(500).json({error: err.message});
            return;
        }

        res.json({
            message: 'success',
            data: rows
        });
    });
});

//add (post) role
router.post('/role', ({ body }, res) => {
    const sql = `INSERT INTO role (title, salary, department_id)
        VALUES (?,?,?)`;
    const params = [body.title, body.salary, body.department_id];
    db.run(sql, params, function(err, result) {
        if(err) {
            res.status(400).json({ error: err.message });
            return;
        }

        res.json({
            message: 'success',
            data: body, 
            id: this.lastID
        });
    });
});

module.exports = router;
