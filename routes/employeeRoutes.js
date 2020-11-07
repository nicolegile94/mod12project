const express = require('express');
const router = express.Router();
const db = require('../db/database');

//get employee
router.get('/employees', (req, res) => {
    const sql = `SELECT * FROM employee`;
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

//add (post) employee
router.post('/employee', ({ body }, res) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES (?,?,?, ?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
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

//edit (put) employee
router.put('/employee/:id', (req, res) => {
    const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
    const params = [req.body.role_id, req.params.id];

    db.run(sql, params, function(err, data) {
        if(err) {
            res.status(400).json({error: err.message});
            return;
        }

        res.json({
            message: 'success',
            data: req.body,
            changes: this.changes
        });
    });
});

module.exports = router;