const Engineer = require('../lib/Engineer');

describe('Engineer class', () =>{
    it('Creates an engineer with name, id, and email', () => {
        const engineer = new Engineer (123456, "Summer","summer@email.com", "Summerjade123");

        expect(engineer.name).toEqual("Summer");
        expect(engineer.id).toEqual(123456);
        expect(engineer.email).toEqual("summer@email.com", "Summerjade123");
    })

    describe('Get Name', () =>{
        it('Should return engineer name', () => {
            const engineer = new Engineer (123456, "Summer","summer@email.com", "Summerjade123");
    
            expect(engineer.getName()).toEqual("Summer");
        })
    })

    describe('Get Id', () =>{
        it('Should return engineer id', () => {
            const engineer = new Engineer (123456, "Summer","summer@email.com", "Summerjade123");
    
            expect(engineer.getId()).toEqual(123456);
        })
    })

    describe('Get Email', () =>{
        it('Should return engineer email', () => {
            const engineer = new Engineer (123456, "Summer","summer@email.com", "Summerjade123");
    
            expect(engineer.getEmail()).toEqual("summer@email.com");
        })
    })

    describe('Get Role', () =>{
        it('Should return engineer role', () => {
            const engineer = new Engineer (123456, "Summer", "summer@email.com", "Summerjade123");
    
            expect(engineer.getRole()).toEqual("Engineer");
        })
    })

    describe('Get GitHub', () =>{
        it('Should return engineer github username', () => {
            const engineer = new Engineer (123456, "Summer","summer@email.com", "Summerjade123", "Summerjade123");
    
            expect(engineer.getGitHub()).toEqual("Summerjade123");
        })
    })
})