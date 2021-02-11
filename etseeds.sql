USE employee_DB;

INSERT INTO department  (name)
VALUES ('Sales'),('HR'),('Finance'),('Legal');

INSERT INTO role (title,salary,department_id)
VALUES ('Sales Lead',400000,1), ('Hr Manager',300000,2),('Finance Manager',250000,3),('Lawyer',100000,4);

INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES ('John','Doe',1, NULL),('Johnathan','Smith',2, NULL)('Micheal','Evan',3, NULL)('Jordan','Samuel',4, NULL);

