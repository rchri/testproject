Feature: CustomerRegistration

  #commandline to run : mvn test -Dcucumber.options="--tags @test"
 @test
  Scenario: Customer should be able to see register page through funnel even without choosing styles, brand and customer just want to test service
    Given Go to Homepage
    Then Verify Homepage
    When Click on Lets Go button
    Then Verify SetupProfile Page Headline "What do you like to wear in your free time?"
    When Click option "dont like any private style"
    And Click on Continue button
    Then Verify SetupProfile Page Headline "What do you wear to work?"
    When Click option "dont like any work style"
    And Click on Continue button
    Then Verify SetupProfile Page Headline "Which shoes would you wear?"
    When Click option "dont like any shoe style"
    And Click on Continue button
    Then Verify SetupProfile Page Headline "What would you NEVER wear?"
    When Mark all options none
    And Click on Continue button
    Then Verify SetupProfile Page Headline "Which brands do you like?"
    When Write Brand Name "DanisBRAND"
    And Click on Continue button
    And Verify SetupProfile Page Headline "How old do you feel?"
    When Click option "55+"
    And Click on Continue button
    And Verify SetupProfile Page Headline "What's motivating you to try out our service?"
    When Click option "testing the service"
    And Click on Continue button
    Then Verify Registration Page Headline "Perfect! Now your stylist knows what you like."





