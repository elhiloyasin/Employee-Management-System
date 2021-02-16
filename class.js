const connection = require('./connection');

class DB {

    constructor(connection) {
        this.connection = connection
    }
    findEmployee() {
        return this.connection.promise().query(
            'SELECT * FROM employee'
        )
    }
    findRole() {
        return this.connection.promise().query(
            'SELECT * FROM role'
        )
    }
    findDepartment() {
        return this.connection.promise().query(
            'SELECT * FROM department'
        )

    }
    addEmployee(employee) {
        return this.connection.promise().query(
            'INSERT INTO employee SET ?', employee

        )


    }

    addRole(role) {
        return this.connection.promise().query(
            'INSERT INTO role SET ?', role

        )
    }
    addDepartment(department) {
        return this.connection.promise().query(
            'INSERT INTO department SET ?', department
        )
    }
    updateEmployeeRole(employee_id, role_id) {
        return this.connection.promise().query(
            'UPDATE employee SET role_id = ? WHERE id = ?', [role_id, employee_id]
        )
    }
}


module.exports = new DB(connection);








