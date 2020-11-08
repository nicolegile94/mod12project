const { prompt } = require("inquirer");
const db = require("./db/database");
const cTable = require('console.table');
const router = require("./routes/departmentRoutes");

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
                },
                {
                    name: "Quit",
                    value: "quit"
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
           case "quit":
                quit();
                break;
            default:
                quit();
        }
    })
}

function getDepartment() {
    // code to get list of departments

    //then put the rows into console table
    var values = [
        ['Name of Department A'],
        ['Name of Department B']
    ]
    console.table(['Department'], values);

    mainMenu();
}

function getRole() { 
    // code to get list of roles

    //then put the rows into console table
    var values = [
        ['Name of Role A', 'Salary A'],
        ['Name of Role B', 'Salary B']
    ]
    console.table(['Role', 'Salary'], values);

    mainMenu();

}

function getEmployee() {
    // code to get list of employees

    //then put the rows into console table
    var values = [
        ['First Name of Employee A', 'Last Name of Employee A', 'Role ID A', 'Manager ID A' ],
        ['First Name of Employee B', 'Last Name of Employee B', 'Role ID B', 'Manager ID B']
    ]
    console.table(['First Name', 'Last Name', 'Role', 'Manager'], values);

    mainMenu();
}

function postDepartment() {
    prompt([
        {
            name: "name",
            message: "What would you like to name this Department?"
        }
    ])
    .then(res => {
        //code to plug info into api

        //return to main menu
        mainMenu();
    })
};

function postRole() {
    prompt([
        {
            name: "name",
            message: "What would you like to name this Role?"
        },
        {
            name: "salary",
            message: "What is this new Role's salary?"
        }
    ])
    .then(res => {
        //code to plug info into api

        //return to main menu
        mainMenu();
    })
}

function postEmployee() {
    prompt([
        {
            name: "firstName",
            message: "What is this Employee's first name?"
        },
        {
            name: "lastName",
            message: "What is this Employee's last name?"
        },
        {
            name: "roleID",
            message: "What is this Employee's role?"
        },
        {
            name: "managerID",
            message: "Who is this Employee's manager?"
        }
    ])
    .then(res => {
        //code to plug info into api

        //return to main menu
        mainMenu();
    })
}

function putEmployee() {
    prompt([
        {
            name: "name",
            message: "What is the name of the Employee you would like to edit??"
        },
        {
            name: "newRole",
            message: "What is the Employee's new role?"
        }
    ])
    .then(res => {
        //code to plug info into api

        //return to main menu
        mainMenu();
    })
}

function quit() {
    console.log("Thank you, goodbye!");
    process.exit();
}

mainMenu();