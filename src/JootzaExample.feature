Feature: As a cutomer, I want to be able to navigate jootza.com

Scenario: As a customer, I want to verify login link
Given I am on amazon.com website
When I click on Cart
Then I should see Your Cart header
And I should see Sign in button
And I should see Sign up now button
And I should see Sign in button
And I should see Start here button

@Jootza @JootzaRegister @jootzaCustomer
Scenario: As a customer, I want to verify Register Now link
When I navigate to jootza.com
When I click on Login link
Then I should see login header

@Jootza @JootzaForgotPassword @jootzaCustomer
Scenario: As a customer, I want to verify Forgot password link
When I navigate to jootza.com
When I click on Register Now link
Then I should see Register header

@Jootza @JootzaLearnMore @jootzaBusiness
Scenario: As a customer, I want to verify Learn more link
When I navigate to jootza.com
When I click on Login link
And I click on Forgot Password link
Then I should see Forgot Password header

Scenario: Fifth
Given I am on jootza.com website
When I scroll down
And i click on learn more button I should see CUSTOMER REGISTRATION header