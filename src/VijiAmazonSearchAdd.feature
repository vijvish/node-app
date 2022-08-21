Feature: As a signed in  Amazon customer, I want to search and add an item to My Cart.

@Amazon @AmazonSearch @AmazonNavTab
Scenario: As a signed in Amazon customer, I want to Search in Health & Household Navigation tab
Given I am on the Amazon home page
When I click on "Health & Household" tab link
Then I see "Health, Household and Baby Care" header

@Amazon @AmazonSearch @AmazonSearchBar
Scenario: As a signed in Amazon customer, I want to search for "Tide pods"
Given I am on Health Household page
When I click on "Search bar"
Then I should be able to enter "Tide pods" in the search bar
And I should be able to see "Results" header

@Amazon @AmazonSearch @AmazonResults
Scenario: As a signed in Amazon customer, I should be able to click on Search result to view product
Given I am on the Results page
When I click on the first result
Then I should see " One-time purchase: " button

@Amazon @AmazonSearch @AmazonAddToCart
Scenario: As a signed in Amazon customer, I should be able to add the product to my Cart
Given I am on the product page,
When I click on " One-time purchase: " button
Then I should see "Add to Cart" button
And I should be able to click the "Add to Cart button"
And I should see "Added to Cart" header
And I should see "Go to Cart" button

@Amazon @AmazonSearch @AmazonViewCart
Scenario: As a signed in Amazon customer, I should be able to see the product being added to my cart
Given I am on the product page
When I click on "Go to cart" button
Then I should be able to see "Shopping Cart" header