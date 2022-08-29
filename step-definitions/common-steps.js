module.exports = function () {

    this.Given(/^I am on the "([^"]*)" Page$/, function (objectKey) {
        return helpers.loadPage(page.pageObjects.siteUrls[objectKey]);
    });

    this.Given("I am on the SignUpPage", async function () {
        await driver.sleep(100);
        return;
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


    this.When(/^I enter "([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)""([^"]*)"$/, async function (objectKey1,objectKey2,objectKey3,objectKey4,objectKey5,objectKey6) {
        if (objectKey1 == 'SSFname'){
            return page.pageObjects.inputElement1(objectKey1,objectKey2,objectKey3,objectKey4,objectKey5,objectKey6);
        }
        await driver.sleep(3000);
        return page.pageObjects.inputElement2(objectKey1,objectKey2,objectKey3,objectKey4,objectKey5,objectKey6);
    });

    this.Then(/^I should be able to see "([^"]*)"$/, async function (objectKey) {
        if(objectKey == 'SSErrorMessage5'){
            await driver.sleep(2000);
            return page.pageObjects.elementExists1();
        }
        await driver.sleep(5000);
        return page.pageObjects.elementExists(objectKey);
    });


};
