Feature: As a user I want to sign up in Smart submissions website with user details and login 

 @ss @ssSignUpPage @ssNav
 Scenario: As a user I want to navigate to Smart Submissions SignUp Page
   Given I am on the "SmartSubmissions" Page
   When I click on "SSSignUpLink" 
   Then I should see "SSLogo" 

 @ss @ssSignUpPage @ssEnterSignUpUserDetails 
 Scenario: As a user I want to enter user details in the SignUp Page
   Given I am on the "SSSignUpLink" Page
   When I enter the inputs 
      |InputName           |InputValue |
      |SSFName             |John       |
      |SSLName             |Doe        | 
      |SSEmail             |           |
      |SSMobileNumber      |1111111111 |
      |SSCreateNewPassword |testtest   |
      |SSConfirmPassword   |testtest   |
   And I click on "AcceptTermsCheckBox"
   And I click on "SSRegisterBtn"
   Then I should see "SSErrorMessage"
   
  @ss @ssLoginPageNavAndEnterDetails
  Scenario: As a user I want to navigate to the Login Page
    Given I am on the "SSSignUpLink" Page
    When I click on "SSLoginLink"
    And I enter the inputs
      | InputName                | InputValue      |
      | SSEnterEmailTextBox      | johndoe@test.com|
      | SSEnterPasswordTextBox   | testtest        |
    And I click on "SSLoginBtn"
    Then I should see "SSLoginError"

    