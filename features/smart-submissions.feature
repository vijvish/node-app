Feature: As a user I want to sign up in Smart submissions website with user details and login

  @ss @ssSignUpPage @ssNav
  Scenario: As a user I want to navigate to Smart Submissions SignUp Page
    Given I am on the "SmartSubmissions" Page
    When I click on "SSSignUpLink"
    Then I should see "SSLogo"

  @jootza @jootzatest1
  Scenario Outline: Customer is displayed with jootza.com landing page
    Given I am on the Jootza portal
    When I click on "Login"
    When I enter username "<Username>"
    And I enter password "<Password>"
    When I click on "LoginBtn"
    Then I should see the approver name as "<approverName>"
    Examples:
      | Username   | Password | approverName |
      | kavithas   | demo1234 | ADMIN1, CLT  |
      | Shanuser12 | demo1234 | Adams, Jimmy |

  @ss @ssSignUpPage @ssEnterSignUpUserDetails1
  Scenario Outline: As a user I want to enter user details in the SignUp Page
    Given I am on the "SSSignUpLink" Page
    When I click on "SSJobseekerRadioBtn"
    And I enter "<SSFName>""<SSLName>""<SSEmail>""<SSMobileNumber>""<SSCreateNewPassword>""<SSConfirmPassword>"
    And I click on "AcceptTermsCheckBox"
    And I click on "SSRegisterBtn"
    Then I should be able to see "<ErrorMessage>"
    Examples:
      | SSFName | SSLName | SSEmail                | SSMobileNumber | SSCreateNewPassword | SSConfirmPassword | ErrorMessage    |
      | John    | Doe     | john.doe@test.com      | 1111111111     | testtest            | testtest          | SSHappyMessage  |
      | Jane    | Smith   | jane.smith@test.com    |                | testtest            | testtest          | SSErrorMessage1 |
      | David   | Joe     |                        | 1111111111     | testtest            | testtest          | SSErrorMessage2 |
      |         | Schnell | gavin.schnell@test.com | 1111111111     | testtest1           | testtest          | SSErrorMessage3 |
      | Alpha   |         | alpha.gamma@test.com   | 1111111111     | testtest            | testtest          | SSErrorMessage4 |
      |         |         |                        |                |                     |                   | SSErrorMessage5 |


  @ss @ssSignUpPage @ssEnterSignUpUserDetails2
  Scenario: As a user I want to enter user details in the SignUp Page
    Given I am on the "SSSignUpLink" Page
    And I enter the inputs
      | InputName           | InputValue          |
      | SSFName             | Jane                |
      | SSLName             | Smith               |
      | SSEmail             | jane.smith@test.com |
      | SSMobileNumber      | 2345678991          |
      | SSCreateNewPassword | test1234            |
      | SSConfirmPassword   | test1234            |
    And I click on "AcceptTermsCheckBox"
    And I click on "SSRegisterBtn"
    Then I should see ""SSLoginBtn""

  @ss @ssLoginPageNavAndEnterDetails
  Scenario: As a user I want to navigate to the Login Page
    Given I am on the "SSSignUpLink" Page
    When I click on "SSLoginLink"
    And I enter the inputs
      | InputName              | InputValue       |
      | SSEnterEmailTextBox    | johndoe@test.com |
      | SSEnterPasswordTextBox | testtest         |
    And I click on "SSLoginBtn"
    Then I should see "SSLoginError"

