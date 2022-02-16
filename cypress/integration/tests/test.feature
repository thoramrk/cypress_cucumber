Feature: Rendition Guid search
  
        @smoke
        Scenario: Validate Rendition Guid for person
            Given I open nuclear Rendition 
             Then I see nuclear in the title
              And I search and select "Person"
              And I enter query "Testing"
              And I click on search button
              Then I validate status as " SUCCESS"
              When I click on Renditoion first record
              Then I see status as "SUCCESS"


          
        @smoke
        Scenario: Validate Rendition Guid for organization
            Given I open nuclear Rendition 
             Then I see nuclear in the title
              And I search and select "Organization"
              And I enter query "Testing"
              And I click on search button
              Then I validate status as "SUCCESS"
              When I click on Renditoion first record
              Then I see status as "SUCCESS"    