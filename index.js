const { prompt } = require("inquirer");
const db = require("./db/database");
const cTable = require('console.table');

//  and update an employee role

function mainMenu() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "Please select an action",
            choices: [
                {
                    name: "View All Departments",
                    value: "getDepartment"
                },
                {
                    name: "View All Roles",
                    value: "getRole"
                },
                {
                    name: "View All Employees",
                    value: "getEmployee"
                },
                { 
                    name: "Add a Department",
                    value: "postDepartment"
                },
                {
                    name: "Add a Role",
                    value: "postRole"
                },
                {
                    name: "Add an Employee",
                    value: "postEmployee"
                },
                {
                    name: "Update an Employee",
                    value: "putEmployee"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;
        switch (choice) {
            case "getDepartment":
                getDepartment();
                break;
            case "getRole":
                getRole();
                break;
            case "getEmployee":
                getEmployee();
                break;
            case "postDepartment":
                postDepartment();
                break;
            case "postRole":
                postRole();
                break;
            case "postEmployee":
                postEmployee();
                break;
            case "putEmployee":
                putEmployee();
                break;
            default:
                quit();
        }
    })
}

function getDepartment() {
}

function getRole() { 
}

function getEmployee() {
}

function postDepartment() {
}

function postRole() {
}

function postEmployee() {
}

function putEmployee() {
}

function quit() {
}

mainMenu();