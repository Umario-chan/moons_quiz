/// <reference types='cypress'/>

import QuizElements from "../PO/QuizElements";

describe('SuiteTest_Alineadores', function(){
    
    const devices = ["macbook-15"];
    devices.forEach((device) => {
        context('Practice' , () => {
           beforeEach(() => {
               cy.viewport(device)
           })
    
        
        it('Open the PageSpeed Insights', function(){   
            //cy.fixture('quiz').then(function(data){
            //    this.data=data

                cy.visit("https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect")
                //quizElements.getClassQuestion001().should('have.attr', 'font-size: 30px')
            //})
        })

        })
    })
})