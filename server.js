const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./db/database');
const apiRoutes = require('./routes');
app.use('/api', apiRoutes);
var inquirer = require('inquirer');
const cTable = require('console.table');

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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