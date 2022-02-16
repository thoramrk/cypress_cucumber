require('cypress-xpath');
import searchLocators from '../../locators/searchPageLocator'
const search= new searchLocators()

const url = 'https://nuclear-qa.int.thomsonreuters.com/'

class searchPage {

  static visit() {
    cy.visit(url);
  }

  static titleMacth() {
    search.nuclearHeader().should('have.text','NuCLEAR')
  }

  static selectSearchType(keyword) {
    search.searchTypeDropdown().select(keyword)  
  }

  static enterQuery(keyword){
    search.queryField().clear()
    search.queryField().type(keyword)
  }

  static clickOnSearchButton(){
    search.buttonAddrs().click()
  }

  static validateStatus(response){
    search.statusMsg().contains(response)
  }

  static clickOnRenditionFirstRecord(){
    search.renditionFirst().click();
}

  static validateStatusOnRenditionRecordPage(response){
    search.statusMsgOnRendition().first().contains(response)
}

  static clickOnRecordEntry(){
    search.recordEntry().click()
}


static dummytitleMacth() {
  search.nuclearHeader().should('have.text','Chaithanya')
}

}

export default searchPage;