const Manager = require('../lib/Manager');

describe('Manager class', () =>{
    it('Creates a manager role with name, id, and email, office number', () => {
        const manager = new Manager (123456, "Summer","summer@email.com",1);

        expect(manager.name).toEqual("Summer");
        expect(manager.id).toEqual(123456);
        expect(manager.email).toEqual("summer@email.com");
        expect(manager.officeNumber).toEqual(1);
    })

    describe('Get Name', () =>{
        it('Should return manager name', () => {
            const manager = new Manager (123456, "Summer","summer@email.com",1);
    
            expect(manager.getName()).toEqual("Summer");
        })
    })

    describe('Get Id', () =>{
        it('Should return manager id', () => {
            const manager = new Manager (123456, "Summer","summer@email.com",1);
    
            expect(manager.getId()).toEqual(123456);
        })
    })

    describe('Get Email', () =>{
        it('Should return manager email', () => {
            const manager = new Manager (123456, "Summer","summer@email.com",1);
    
            expect(manager.getEmail()).toEqual("summer@email.com");
        })
    })

    describe('Get Role', () =>{
        it('Should return manager role', () => {
            const manager = new Manager (123456, "Summer","summer@email.com",1);
    
            expect(manager.getRole()).toEqual("Manager");
        })
    })
})