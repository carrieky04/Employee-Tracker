Insert Into department (name)
VALUES ('Engineering'),('Finance'),('Legal'),('Sales');

Insert Into role (title, salary, department_id)
VALUES ('Sales Lead', 100000, 4),
        ('Sales Person', 80000, 4),
        ('Lead Engineer', 150000, 1),
        ('Software Engineer', 120000, 1),
        ('Account Manager', 160000, 2),
        ('Accountant', 125000, 2),
        ('Legal Team Lead', 250000, 3),
        ('Lawyer', 190000, 3);

Insert Into employee (first_name, last_name, role_id, manager_id)
VALUES ('Christopher', 'Wallace', 1, null),
        ('Tupac', 'Shakur', 2, 1),
        ('Nasir', 'Jones', 3, null),
        ('Melissa', 'Elliott', 4, 3),
        ('Lauryn', 'Hill', 5, null),
        ('Onika', 'Maraj', 6, 5),
        ('Calvin', 'Broadus', 7, null),
        ('Shawn', 'Carter', 8, 7);