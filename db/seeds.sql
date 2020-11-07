INSERT INTO departments (name)
VALUES
    ('Human Resources'),
    ('Research and Development'),
    ('Marketing'),
    ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Manager', 65000, 2),
    ('Secretary', 40000, 1);

INSERT INTO employee (first_name, last_name, role_id)
VALUES
    ('John', 'Doe', 2),
    ('Frank', 'Smith', 1);