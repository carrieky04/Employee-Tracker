Drop Database if Exists employees_db;
Create Databe employees_db;

Use employees_db;

Create Table employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT 
    FOREIGN KEY (role_id)
    REFERENCES role(id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(8,2),
    department_id INT
    FOREIGN KEY (department_id)
    REFERENCES department(id)
);

Create Table department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30)
);