/// <reference types='cypress'/>

import QuizElements from "../PO/QuizElements";

describe('SuiteTest_Alineadores', function(){
    
    //const devices = ["macbook-15","ipad-2","iphone-6"];
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context('Moons Quiz' , () => {
            beforeEach(() => {
                cy.viewport(device)
                cy.reload()
                cy.clearCookies()
                cy.fixture('quiz').then(function(data){
                    this.data=data
                    cy.visit(this.data.MX_PROD_QUIZ)
                })
           })
    
        // it('Open the Quiz Page', function(){   
        //     cy.fixture('quiz').then(function(data){
        //         this.data=data

        //         cy.visit(this.data.MX_PROD_MOONS1925)
        //     })
        //     })
        it('MOONS-1925_001 - Validate the Header', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getPromoBanner().should('be.visible')
                    cy.contains(this.data.PromoLabel001)
                    cy.contains(this.data.PromoLabel002)
                    cy.contains(this.data.PromoLabel003)
                    quizElements.gatHeader().should('be.visible')
                    quizElements.getMainTitle().should('be.visible')
                    cy.contains(this.data.MainTitle).should('be.visible')
                    cy.contains(this.data.SecondTitle)
            }) 
        })
        it('MOONS-1925_002 - Validate the Questions ', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    //quizElements.getQuestionSection().scrollIntoView()
                    cy.contains(this.data.Question1)
                    //quizElements.getClassQuestion001().should('have.attr', 'font-size: 30px')
                    //quizElements.getClassQuestion001().should('have.attr', 'style', 'color: orange;'))
                    quizElements.getFirstQuestionDropdown().should('be.visible')
                    cy.contains(this.data.Question2)
                    quizElements.getImage001().should('be.visible')
                    quizElements.getImage002().should('be.visible')
                    quizElements.getImage003().should('be.visible')
                    quizElements.getImage004().should('be.visible')
                    //quizElements.getImage005().should('be.visible')
                    quizElements.getThirdQuestion().should('be.visible')
                    cy.contains(this.data.Question3)
                    quizElements.getInputName().should('be.visible')
                    cy.contains(this.data.Question3_1)
                    quizElements.getInputLastname().should('be.visible')
                    cy.contains(this.data.Question3_2)
                    quizElements.getInputEmail().should('be.visible')
                    cy.contains(this.data.AddYourMail)
                    quizElements.getInputWhatsApp().should('be.visible')
                    cy.contains(this.data.AddYourWhats)
                    cy.contains(this.data.AddComercialCenter)
            }) 
        })

        it('MOONS-1925_003 - Validate Submit button', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data

                    quizElements.getSubmitButton().should('be.visible')
                    quizElements.getStarsEvaluationImg().should('be.visible')
                    quizElements.getPromoImg().should('be.visible')
            }) 
        })

        it('MOONS-1925_004 - Validate the footer', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getSubmitButton().should('be.visible')
                    quizElements.getStarsEvaluationImg().should('be.visible')
                    quizElements.getPromoImg().should('be.visible')
                    cy.contains(this.data.Cofepris)
                    cy.contains(this.data.Version)
                    cy.contains(this.data.VersionNumber)
                    cy.contains(this.data.Rigths)
            }) 
        })

        it('MOONS-1925_005 - Submit the quiz without data', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data    

                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error001)
            }) 
        })

        it('MOONS-1925_006 - Submit the quiz with question 1 answered', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    cy.clearLocalStorage()
                    //quizElements.getFirstQuestionDropdown().should('deep.equal', '13 - menos', '14 - 17', '18 - 24', '25 - 35', '36 - 45', '46 +')
                    quizElements.getFirstQuestionDropdown().select(this.data.Age003)
                    //quizElements.getError().should('have.value', this.data.ErrorMessage001)
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error002)
            }) 
        })

        it('MOONS-1925_007 - Submit the quiz with question 1 and 2 answered without name', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    //quizElements.getError().should('have.value', this.data.ErrorMessage001)
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error003)
            }) 
        })
        it('MOONS-1925_008 - Submit the quiz with question 1 and 2 answered with wrong name', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    //quizElements.getError().should('have.value', this.data.ErrorMessage001)
                    quizElements.getInputName().type(this.data.Answer3_1_1, {force: true})
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error008)
            }) 
        })

        it('MOONS-1925_009 - Submit the quiz with question 1,2 and 3 without Last name answered', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error004)

            }) 
        })

        it('MOONS-1925_010 - Submit the quiz with question 1,2 and 3 with wrong Last name answered', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_2, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2_1, {force: true})
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error009)
                    cy.contains(this.data.Error004)

            }) 
        })

        it('MOONS-1925_011 - Submit the quiz with question 1,2,3 without Email', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2, {force: true})
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error005)

            }) 
        })

        it('MOONS-1925_012 - Submit the quiz with question 1,2,3 with WRONG Email', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2, {force: true})
                    quizElements.getInputEmail().type(this.data.Email001, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.NumberIncomplete, {force: true})
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error005)

            }) 
        })

        it('MOONS-1925_013 - Submit the quiz with question 1,2,3 and 4 without phoneNumber', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2, {force: true})
                    quizElements.getInputEmail().type(this.data.Email003, {force: true})
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error006)

            }) 
        })

        it('MOONS-1925_014 - Submit the quiz with question 1,2,3 and 4 with incorrectNumber', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2, {force: true})
                    quizElements.getInputEmail().type(this.data.Email003, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.NumberWithText, {force: true})
                    quizElements.getInputWhatsApp().should('have.value', this.data.NumberWithTextCorrect)
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error006)

            }) 
        })

        it('MOONS-1925_015 - Submit the quiz with question 1,2,3 and 4 with incompleteNumber', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2, {force: true})
                    quizElements.getInputEmail().type(this.data.Email003, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.NumberIncomplete, {force: true})
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error006)

            }) 
        })

        it('MOONS-1925_016 - Submit the quiz with question 1,2,3 and 4 with completeNumber', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2, {force: true})
                    quizElements.getInputEmail().type(this.data.Email003, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.NumberCorrect, {force: true})
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error007)
            }) 
        })
        it('MOONS-1925_017 - Submit the quiz with question 1,2,3 and 4 without Comercial Center', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    quizElements.getFirstQuestionDropdown().select(this.data.Age004)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2, {force: true})
                    quizElements.getInputEmail().type(this.data.Email003, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.NumberCorrect, {force: true})
                    quizElements.getCheckBoxPermission().check()
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.Error010)
            }) 
        })

        it('MOONS-1925_018 - Submit the quiz with All DATA 001', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    Cypress.on('uncaught:exception', (err, runnable) => {
                        return false;
                    });
                    // cy.visit(this.data.MX_PROD_MOONS1925)
                    quizElements.getFirstQuestionDropdown().select(this.data.Age003)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2, {force: true})
                    quizElements.getInputEmail().type(this.data.Email003, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.NumberCorrect, {force: true})
                    quizElements.getCheckBoxPermission().check()
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.AnswersReview)
                    cy.wait(12000) 
                    cy.contains(this.data.Answer3_1 + " " + this.data.Answer3_2)
                    cy.contains(this.data.CorrecrAnswer002)
                    cy.contains(this.data.Center001).click()
                    //cy.pause()
            }) 
        })

        it('MOONS-1925_019 - Submit the quiz with duplicated data', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    Cypress.on('uncaught:exception', (err, runnable) => {
                        return false;
                    });
                    // cy.visit(this.data.MX_PROD_MOONS1925)
                    quizElements.getFirstQuestionDropdown().select(this.data.Age003)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2, {force: true})
                    quizElements.getInputEmail().type(this.data.Email003, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.NumberCorrect, {force: true})
                    quizElements.getCheckBoxPermission().check()
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.AnswersReview)

                    cy.wait(12000) 
                    quizElements.GetPopUpDuplicatedData().should('be.visible')
            }) 
        })

        it('MOONS-1925_020 - Submit the quiz with UPPERCASE data', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    Cypress.on('uncaught:exception', (err, runnable) => {
                        return false;
                    });
                    // cy.visit(this.data.MX_PROD_MOONS1925)
                    quizElements.getFirstQuestionDropdown().select(this.data.Age003)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.UppercaseName001, {force: true})
                    quizElements.getInputLastname().type(this.data.UppercaseLastName002, {force: true})
                    quizElements.getInputEmail().type(this.data.UppercaseMail001, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.NumberCorrect002, {force: true})
                    quizElements.getCheckBoxPermission().check()
                    quizElements.getSubmitButton().click()
                    cy.contains(this.data.AnswersReview)
                    cy.wait(12000) 
                    cy.contains(this.data.UppercaseName002 + " " + this.data.UppercaseLastName003)
                    cy.contains(this.data.CorrecrAnswer002)
                    cy.contains(this.data.Center001).click()
                    cy.wait(15000)
            }) 
        })

        it('MOONS-1925_021 - Submit the quiz with NO candidate Age', function(){
            const quizElements=new QuizElements()
            cy.fixture('quiz').then(function(data){
                this.data=data
                    
                    Cypress.on('uncaught:exception', (err, runnable) => {
                        return false;
                    });
                    // cy.visit(this.data.MX_PROD_MOONS1925)
                    quizElements.getFirstQuestionDropdown().select(this.data.Age001)
                    quizElements.getImage001().click()
                    quizElements.getInputName().type(this.data.Answer3_1, {force: true})
                    quizElements.getInputLastname().type(this.data.Answer3_2, {force: true})
                    quizElements.getInputEmail().type(this.data.Email003, {force: true})
                    quizElements.getInputWhatsApp().type(this.data.NumberCorrect, {force: true})
                    quizElements.getCheckBoxPermission().check()
                    quizElements.getSubmitButton().click()
                    cy.wait(5000) 
                    //quizElements.getNoCandidateContainer().should('be.visible')
                    cy.contains(this.data.NoCandidateMessage001)
                    cy.contains(this.data.NoCandidateMessage002)
                    cy.contains(this.data.NoCandidateMessage003)
            }) 
        })



        })
    })
})