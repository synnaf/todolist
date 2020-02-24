

describe("About page", ()=> {

    it("Should load about-page", ()=> {

        //cypress visit 
        cy.visit("http://localHost:5005/createTodo")

        cy.contains("About").click()

        //url ska innehålla detta 
        cy.url().should("include", "/about")

        //på den nya sidan ska denna text finnas 
        cy.contains("This todo app was created by Fanny 8-)")
    })


})