require('cypress-xpath');
const url = 'https://nuclear-qa.int.thomsonreuters.com/'
const search_box = '[name="q"]'
const nuclearHeader = '.navbar-brand'
const searchTypeDropdown = '[data-testid="input-searchType"]'
const queryField = '[data-testid="input-query"]'
const buttonAddrs = '[data-testid="button-search"]'
const statusMsg = 'label:contains("Status")+'
const renditionFirst = 'tbody > tr > .renditionGuid > a'
const statusMsgOnRendition = 'div:contains("Status")+div'
const recordEntry = 'div:contains("Record")+div a'
class nuclearHomePage {
  static visit() {
    cy.visit(url);
  }

  static titleMacth() {
    cy.get(nuclearHeader).should('have.text','NuCLEAR')
  }

  static selectSearchType(keyword) {
    cy.get(searchTypeDropdown).select(keyword)  
  }

  static enterQuery(keyword){
    cy.get(queryField).clear()
    cy.get(queryField).type(keyword)
  }

  static clickOnSearchButton(){
    cy.get(buttonAddrs).click()
  }

  static validateStatus(response){
      cy.get(statusMsg).contains(response)
  }

  static clickOnRenditionFirstRecord(){
    cy.get(renditionFirst).click();
}

  static validateStatusOnRenditionRecordPage(response){
    cy.get(statusMsgOnRendition).first().contains(response)
}

  static clickOnRecordEntry(){
    cy.get(recordEntry).click()
}


static dummytitleMacth() {
  cy.get(nuclearHeader).should('have.text','Chaithanya')
}

}

export default nuclearHomePage;