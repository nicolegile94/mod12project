const express = require('express');
const router = express.Router();
const db = require('../db/database');

//get departments
router.get('/departments', (req, res) => {
    const sql = `SELECT * FROM departments`;
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

//add (post) departments
router.post('/department', ({ body }, res) => {
    const sql = `INSERT INTO departments (name)
        VALUES (?)`;
    const params = [body.name];
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