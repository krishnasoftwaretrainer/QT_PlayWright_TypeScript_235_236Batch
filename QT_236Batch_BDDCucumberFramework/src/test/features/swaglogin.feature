Feature: SwagLabs Login

Scenario: User logs in successfully on SwagLabs
    Given The user is on the login page
    When The user enters a username "standard_user"
    And The user enters a password "secret_sauce"
    And The user clicks the login button
    Then The user should be logged into SwagLabs