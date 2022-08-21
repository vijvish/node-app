Feature: As a customer, I want to view the items in my Amazon Cart and checkout

@Amazon @AmazonCart @AmazonCartHome
Scenario: As an existing Amazon customer, I want to navigate to Cart from Amazon home screen.
Given I am on the Amazon home screen
When I click on "Cart" link
Then I should see "Your Amazon Cart is empty" or "Shopping Cart" header

@Amazon @AmazonCart @AmazonCartViewItems
Scenario: As an existing Amazon customer, I want to view the items in my cart
Given I am on the Shopping Cart page
When I click on "proceedToRetailCheckout" button
Then I should see "Checkout" header

@Amazon @AmazonCart @AmazonCartCheckout
Scenario: As an existing Amazon customer, I want to checkout the items in my cart
Given I am on the Checkout page
When I click on "Item" link next to the "Checkout" header
Then I should see "Stay in checkout" or "Return to Cart" buttons

@Amazon @AmazonCart @AmazonCartCancelCheckout
Scenario: As an existing Amazon customer, I want to cancel the checkout
Given I am on the Checkout page
When I click on "Return to Cart" button
Then I should see "Shopping Cart" header

@Amazon @AmazonCart @AmazonCartSaveForLater
Scenario: As an existing Amazon customer, I want to move my Cart items to "Saved for later"
Given I am on Shopping Cart page
When I click on "Save for later" button
Then I should see "has been moved to Saved for Later" message
