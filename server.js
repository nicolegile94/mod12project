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