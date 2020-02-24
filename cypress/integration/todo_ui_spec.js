//Här skriver vi våra UI tester 
//mocha syntax:

    //rubrik för vårt test 
    describe("UI test for my Todo app", ()=> {

        // it("Should visit starting page for app", ()=> {
        // //     //cypress, gå till webbadressen och kontrollera koppling 
        //  cy.visit("http://localHost:5005/createTodo")

        // //     //kolla om en länk finns, eller en knapp, leta efter content 
        // //     cy.contains("Edit").first().as("link")

        // //     // cy.url()
                
        // //     //klickar in på ett element 
        // //     cy.get("@link").click()
        // //         // .type("").should("")

        // //     cy.get("#test_ui").type("2020-01-12").should("have.value", "2020-01-12")
        // //     cy.contains("Update").click()

        //     // cy.get("elementet").type("det somn ska skrivas in")
        //     //.should("have.value", "det vi bett cypress skriva in")

        //     //Kontrollera att vi hamnar på rätt sökväg (ex. edit, delete)

        // })

        it("Should add an todo-item, and then delete it", ()=> {

            cy.visit("http://localHost:5005/createTodo")
            cy.get("body > main > section.todo-form > form > div:nth-child(2) > input[type=textarea]")
                 .type("New todo").should("have.value", "New todo")
                 .get("body > main > section.todo-form > form > div:nth-child(3) > input[type=date]").type("2020-01-22").should("have.value", "2020-01-22")
            // klicka på submit knappen 
            cy.get("form").submit()

            //leta reda på li-tagg som innehåller önskade ord, ge ett alias
            cy.contains("li", "New todo").as("deleteme")

            //hitta element enligt alias, leta efter Delete och klicka 
            cy.get("@deleteme").contains("Delete").click()

        
        })

    })