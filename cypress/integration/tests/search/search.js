import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import searchPage from '../../../pages/search/search';

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

Given('User open nuclear Rendition', () => {
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
  searchPage.visit();
});


Then(`User see nuclear in the title`, () => {
    searchPage.titleMacth();
});

And(`User search and select {string}`, (keyword) => {
    searchPage.selectSearchType(keyword);
});

And(`User enter query {string}`, (keyword) => {
    searchPage.enterQuery(keyword);
});

And(`User click on search button`, () => {
    searchPage.clickOnSearchButton();
});

Then('User validate status as {string}',(keyword) => {
   searchPage.validateStatus(keyword) 
});

And(`User click on Renditoion first record`, () => {
    searchPage.clickOnRenditionFirstRecord();
});

Then('User see status as {string}',(keyword) => {
   searchPage.validateStatusOnRenditionRecordPage(keyword) 
});

And(`User Click on record entry`, () => {
    searchPage.clickOnRecordEntry();
});


