const { assert } = require("chai");
const helpers = require("../runtime/helpers");

/* eslint-disable no-undef */
module.exports = {

    siteUrls: {
    SmartSubmissions: 'https://www.smartsubmissions.com/',
    SSSignUpLink: 'https://www.smartsubmissions.com/signup'
    },

    elements: {
        SSSignUpLink: '//*[@id="mainNav"]/div/div/div[2]/ul/li[2]/button',
        SSLogo: '//*[@id="RegistrationForm"]/img',
        SSLoginLink: '//*[@id="mainNav"]/div/div/div[2]/ul/li[3]/button',
        SSEnterEmailTextBox: '//*[@id="RegistrationForm"]/div[1]/div/input',
        SSEnterPasswordTextBox: '//*[@id="RegistrationForm"]/div[2]/div/input',
        SSLoginBtn: '//*[@id="RegistrationForm"]/div[3]/button',
        SSErrorMessage: '//*[@id="RegistrationForm"]/div[4]/div[2]',
        AcceptTermsCheckBox: '//*[@id="RegistrationForm"]/div[8]/div/div[1]/div[1]/p-checkbox/div',
        SSRegisterBtn: '//*[@id="RegistrationForm"]/div[9]/button',
        SSPasswordVal: 'testtest',
        SSLoginBtn: '//*[@id="RegistrationForm"]/div[3]/button',
        SSFName: '//*[@id="RegistrationForm"]/div[2]/div/input',
        SSLName: '//*[@id="RegistrationForm"]/div[3]/div/input',
        SSEmail: '//*[@id="RegistrationForm"]/div[4]/div/input',
        SSMobileNumber: '//*[@id="RegistrationForm"]/div[5]/div/span[2]/p-inputmask/input',
        SSCreateNewPassword: '//*[@id="RegistrationForm"]/div[6]/div/input',
        SSConfirmPassword: '//*[@id="RegistrationForm"]/div[7]/div/input',
        SSLoginError: '//*[@id="RegistrationForm"]/div[2]/div[2]'

    },
    content : {
       
    },
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pageObjects.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    inputElement: async function(name,val) {
        var selector = page.pageObjects.elements[name]; 
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).sendKeys(val);

    },
    elementExists: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pageObjects.elements[objectKey];

        await driver.sleep(5000);
        return driver.findElement(By.xpath(selector));
    }
    
};
