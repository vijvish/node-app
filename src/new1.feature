Feature: As a customer, I want to be able to navigate amazon.com and sign up

@Amazon @AmazonLogin
Scenario: As a customer, I want to verify login link
Given I am on amazon.com website
When I click on Cart
Then I should see Your Cart header
And I should see Sign in to your account button
And I should see Sign up now button



Scenario: As a customer, I want to enter user details to create account
Given I am on the "Create Account" page
Then I see 
Scenario: As a customer, I want to create Amazon account
Given I am on Sign in page
And I should see "Email or mobile phone number" label
And I be able to enter the email in the textbox  
And I should be able to click the "Continue" button

@Amazon @AmazonSigninPage 
Scenario: As a customer, I want to verify Sign in button
Given I am on Login page
Then I click on Sign in link
Then I should see Sign in header

@Amazon @AmazonSigninVerify
Scenario: As a customer, I want to verify Sign in page
Given I am on Sign in page
Then I should see Amazon log in top center
And I should see Sign in header
And I should see Email or Phone number label
And I should see textbox 
And I should see continue button
And I should see Create Your amazon account button

@Amazon @AmazonSigninVerify @AmazonSininVerifyPhonetextbox
Scenario: As a customer, I want to be able tp sign in to Amazon using my phone number
Given I am on Sign in page
Then I should be able to enter my phone number in the textbox
Then I should be able to click on Continue button

@Amazon @AmazonSigninVerify @AmazonSininVerifyEmailtextbox
Scenario: As a customer, I want to be able tp sign in to Amazon using my email
Given I am on Sign in page
Then I should be able to enter my email in the textbox
Then I should be able to click on Continue button
