module.exports = function () {

    this.Given(/^I am on the "([^"]*)" Page$/, function (objectKey) {
        return helpers.loadPage(page.pageObjects.siteUrls[objectKey]);
    });

    this.When(/^I click on "([^"]*)"$/, function (objectKey) {
        return page.pageObjects.clickElement(objectKey);
    });

    this.Then(/^I should see "([^"]*)"$/, function (objectKey) {
        return page.pageObjects.elementExists(objectKey);
    });

    this.When(/^I enter the inputs$/, async function (table) {
        const fields = table.rows();
        for (i = 0; i < fields.length; i++) {
            page.pageObjects.inputElement(fields[i][0], fields[i][1]);
        };
        await driver.sleep(3000);
        return;
    });


};
