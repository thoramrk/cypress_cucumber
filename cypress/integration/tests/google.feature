Feature: Google Search
  
        @smoke
        Scenario: Doing Google Search
            Given I open Google
             Then I see "Google" in the title
              And I Search "Khadar Shaik"