const Employee = require('../lib/Employee');

describe('Employee class', () =>{
    it('Creates an employee with name, id, and email', () => {
        const employee = new Employee (123456, "Summer","summer@email.com");

        expect(employee.name).toEqual("Summer");
        expect(employee.id).toEqual(123456);
        expect(employee.email).toEqual("summer@email.com");
    })

    describe('Get Name', () =>{
        it('Should return employee name', () => {
            const employee = new Employee (123456, "Summer","summer@email.com");
    
            expect(employee.getName()).toEqual("Summer");
        })
    })

    describe('Get Id', () =>{
        it('Should return employee id', () => {
            const employee = new Employee (123456, "Summer","summer@email.com");
    
            expect(employee.getId()).toEqual(123456);
        })
    })

    describe('Get Email', () =>{
        it('Should return employee email', () => {
            const employee = new Employee (123456, "Summer","summer@email.com");
    
            expect(employee.getEmail()).toEqual("summer@email.com");
        })
    })

    describe('Get Role', () =>{
        it('Should return employee role', () => {
            const employee = new Employee (123456, "Summer","summer@email.com");
    
            expect(employee.getRole()).toEqual("Employee");
        })
    })
})