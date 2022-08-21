Feature: I want to navigate amazon.com and sign up as a new customer.

@Amazon @AmazonSignin @AmazonLogin
Scenario: As a customer, I want to navigate to Amazon.com home page
Given I am on the amazon landing page
When I click on "Hello, Sign In"
Then I should see "Sign in" header

@Amazon @AmazonSignin @AmazonSigninVerify
Scenario: As a customer, I want to verify Sign in page
Given I am on the Sign in page
Then I should see Amazon log in top center
And I should see Sign in header
And I should see "Email or Phone number" label
And I should see textbox 
And I should see "Continue" button
And I should see "Create Your amazon account" button

@Amazon @AmazonSignin @AmazonCreateAccount
Scenario: As a customer, I want to Create Amazon account
Given I am on the Sign in page
When I click on "Create Your amazon account" button
Then I should see "Create Account" header

@Amazon @AmazonCreateAccountInput
Scenario: As a customer, I want to verify the Create Amazon account page
Given I am on the Create Account page
When I enter the inputs for sign up
      | InputName      | InputValue   |
      | customerName   | johndoe      |
      | email          | abc          |
      | password       | password123  |
      | passwordCheck  | password123  |
And I click on "Continue" button
Then I should see "errorMessage"

@Amazon @AmazonCreateAccountInput
Scenario: As a customer, I want to Create Amazon account
Given I am on the Create Account page
When I enter the inputs for sign up
      | InputName      | InputValue   |
      | customerName   | johndoe      |
      | email          | pass@abc.com |
      | password       | password123  |
      | passwordCheck  | password123  |
And I click on "Verify email" button
Then I should see "Verify email address" header

@Amazon @AmazonSigninVerifyEmail
Scenario: As a customer, I want to verify my email address and create account
Given I am on the Verify email address page
When I enter OTP sent to my email address
      |OTPValue    |
      |566774      | 
And I click on "Create your Amazon account" button
Then I should see "errorMessage"
    