const Intern = require('../lib/Intern');

describe('Intern class', () =>{
    it('Creates an intern with name, id, and email', () => {
        const intern = new Intern (123456, "Summer","summer@email.com", "University of Pennsylvania");

        expect(intern.name).toEqual("Summer");
        expect(intern.id).toEqual(123456);
        expect(intern.email).toEqual("summer@email.com");
    })

    describe('Get Name', () =>{
        it('Should return intern name', () => {
            const intern = new Intern (123456, "Summer","summer@email.com", "University of Pennsylvania");
    
            expect(intern.getName()).toEqual("Summer");
        })
    })

    describe('Get Id', () =>{
        it('Should return intern id', () => {
            const intern = new Intern (123456, "Summer","summer@email.com", "University of Pennsylvania");
    
            expect(intern.getId()).toEqual(123456);
        })
    })

    describe('Get Email', () =>{
        it('Should return intern email', () => {
            const intern = new Intern (123456, "Summer","summer@email.com", "University of Pennsylvania");
    
            expect(intern.getEmail()).toEqual("summer@email.com");
        })
    })

    describe('Get Role', () =>{
        it('Should return intern role', () => {
            const intern = new Intern (123456, "Summer","summer@email.com", "University of Pennsylvania");
    
            expect(intern.getRole()).toEqual("Intern");
        })
    })

    describe('Get School', () =>{
        it('Should return intern school', () => {
            const intern = new Intern (123456, "Summer","summer@email.com", "University of Pennsylvania");
    
            expect(intern.getSchool()).toEqual("University of Pennsylvania");
        })
    })
})