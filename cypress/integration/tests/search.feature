Feature: Rendition Guid search

    @smoke
    Scenario: Validate Rendition Guid for person record
        Given User open nuclear Rendition
        Then User see nuclear in the title
        And User search and select "Person"
        And User enter query "Bus"
        And User click on search button
        Then User validate status as "SUCCESS"
        When User click on Renditoion first record
        Then User see status as "SUCCESS"


