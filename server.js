const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'PassWord(1216)',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );
