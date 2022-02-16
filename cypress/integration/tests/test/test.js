import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import nuclearHomePage from '../../../pages/test/test';

import {
    url_token,
    url_search_orchestrator,
    tab_search,
    pathname_search,
    sessionStorage_accessToken_key,
    sessionStorage_accessToken_value,
  } from "../../../pages/common/cy_common_constants";

  import {
    token_mock_response,
    search_orchestrator_mock_response_with_data,
    search_orchestrator_mock_response_empty_data,
    search_results_manager_page_mock_init_data,
    search_results_manager_page_mock_res_Next_1,
    search_results_manager_page_mock_res_Next_2,
  } from "../../../pages/common/cy_response_constants";

Given('I open nuclear Rendition', () => {
    cy.window().then((win) => {
        win.sessionStorage.setItem(
          sessionStorage_accessToken_key,
          sessionStorage_accessToken_value
        );
      });
      cy.intercept("POST", url_token, token_mock_response);
      cy.intercept(
        "POST",
        url_search_orchestrator,
        search_orchestrator_mock_response_with_data
      );
  nuclearHomePage.visit();
  // cy.visit("");
  cy.wait(5000);

});


Then(`I see nuclear in the title`, () => {
    nuclearHomePage.titleMacth();
});

And(`I search and select {string}`, (keyword) => {
    nuclearHomePage.selectSearchType(keyword);
});

And(`I enter query {string}`, (keyword) => {
    nuclearHomePage.enterQuery(keyword);
});

And(`I click on search button`, () => {
    nuclearHomePage.clickOnSearchButton();
});

Then('I validate status as {string}',(keyword) => {
   nuclearHomePage.validateStatus(keyword) 
});

And(`I click on Renditoion first record`, () => {
    nuclearHomePage.clickOnRenditionFirstRecord();
});

Then('I see status as {string}',(keyword) => {
   nuclearHomePage.validateStatusOnRenditionRecordPage(keyword) 
});