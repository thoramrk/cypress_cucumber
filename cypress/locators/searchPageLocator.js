require('cypress-xpath');
class searchPageLocator {
    
    nuclearHeader(){
        return cy.get('.navbar-brand')
    }

    searchTypeDropdown(){
        return cy.get('[data-testid="input-searchType"]')
    }
    
    queryField(){
        return cy.get('[data-testid="input-query"]')
    }

    buttonAddrs(){
        return cy.get('[data-testid="button-search"]')
    }

    statusMsg(){
        return cy.get('label:contains("Status")+')
    }
  
    renditionFirst(){
        return cy.get('tbody > tr > .renditionGuid > a')
    }

    statusMsgOnRendition(){
        return cy.get('div:contains("Status")+div')
    }

    recordEntry(){
        return cy.get('div:contains("Record")+div a')
    }

} 
export default searchPageLocator;