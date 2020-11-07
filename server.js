const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const sqlite3 = require('sqlite3').verbose();
//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to database
const db = new sqlite3.Database('./db/company.db', err => {
    if (err) {
        return console.error(err.message);
    }

    console.log('Connected to the company database.');
});

//get departments
app.get('/api/departments', (req, res) => {
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

//get roles
app.get('/api/roles', (req, res) => {
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

//get employee
app.get('/api/employees', (req, res) => {
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

//add (post) departments
app.post('/api/department', ({ body }, res) => {
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

//add (post) role
app.post('/api/role', ({ body }, res) => {
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

//add (post) employee
app.post('/api/employee', ({ body }, res) => {
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
app.put('/api/employee/:id', (req, res) => {
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

//Default response
app.use((req, res) => {
    res.status(404).end();
});

//listen
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});