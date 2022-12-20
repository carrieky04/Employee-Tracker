Insert Into department (name)
VALUES ('Engineering'),('Finance'),('Legal'),('Sales');

Insert Into role (title, department, salary)
VALUES ('Sales Lead', 'Sales', 100,000),
        ('Sales Person', 'Sales', 80,000),
        ('Lead Engineer', 'Engineering',150,000),
        ('Software Engineer', 'Engineering', 120,000),
        ('Account Manager', 'Finance', 160,000),
        ('Accountant', 'Finance', 125,000),
        ('Legal Team Lead', 'Legal', 250,000),
        ('Lawyer', 'Legal', 190,000);

Insert Into employee (first_name, last_name, title, department, salary, manager_id)
VALUES ('Christopher', 'Wallace', 'Sales Lead', 'Sales', 100,000, null),
        ('Tupac', 'Shakur', 'Salesperson', 'Sales', 80,000, 'Christopher Wallace'),
        ('Nasir', 'Jones', 'Lead Engineer', 'Engineering', 150,000, null),
        ('Melissa', 'Elliott', 'Software Engineer', 'Engineering', 120,000, 'Nasir Jones'),
        ('Lauryn', 'Hill', 'Account Manager', 'Finance', 160,000, null),
        ('Onika', 'Maraj', 'Accountant', 'Finance', 125,000, 'Lauryn Hill'),
        ('Calvin', 'Broadus', 'Legal Team Lead', 'Legal', 250,000, null),
        ('Shawn', 'Carter', 'Lawyer', 'Legal', 190,000, 'Calvin Broadus');