const { assert } = require("chai");
const helpers = require("../runtime/helpers");
var selector1;
var selector2;
var selector3;
var selector4;
var selector5;
var selector6;

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
        SSJobseekerRadioBtn: '//*[@id="RegistrationForm"]/div[1]/label[2]/input',
        SSFName: '//*[@id="RegistrationForm"]/div[2]/div/input',
        SSLName: '//*[@id="RegistrationForm"]/div[3]/div/input',
        SSEmail: '//*[@id="RegistrationForm"]/div[4]/div/input',
        SSMobileNumber: '//*[@id="RegistrationForm"]/div[5]/div/span[2]/p-inputmask/input',
        SSCreateNewPassword: '//*[@id="RegistrationForm"]/div[6]/div/input',
        SSConfirmPassword: '//*[@id="RegistrationForm"]/div[7]/div/input',
        SSLoginError: '//*[@id="RegistrationForm"]/div[2]/div[2]',
        ErrorMessage: '//*[@id="RegistrationForm"]/div[1]/label[2]/input',
        SSHappyMessage: '//*[@id="RegistrationForm"]/div[1]/div/input',
        SSErrorMessage1: '//*[@id="RegistrationForm"]/div[5]/div/div',
        SSErrorMessage2: '//*[@id="RegistrationForm"]/div[4]/div[2]',
        SSErrorMessage3: '//*[@id="RegistrationForm"]/div[2]/div[2]',
        SSErrorMessage4: '//*[@id="RegistrationForm"]/div[3]/div[2]',
        SSErrorMessage5: '//*[@id="RegistrationForm"]/div[7]/div[2]',
        SSErrorMessage6: '//*[@id="RegistrationForm"]/div[6]/div[2]'

    },

    content : {
       
    },
    clickElement: async function(objectKey) {
        // eslint-disable-next-line no-console
        var selector = page.pageObjects.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },

   
    inputElement1: async function(objectKey1,objectKey2,objectKey3,objectKey4,objectKey5,objectKey6) {
        await driver.sleep(5000);
        //var SSSNo = sssno;
         /*var selector1 = page.pageObjects.elements.SSFName;
        var selector2 = page.pageObjects.elements.SSLName;
        var selector3 = page.pageObjects.elements.SSEmail;
        var selector4 = page.pageObjects.elements.SSMobileNumber;
        var selector5 = page.pageObjects.elements.SSCreateNewPassword;
        var selector6 = page.pageObjects.elements.SSConfirmPassword;
       driver.findElement(By.xpath(selector1)).sendKeys(objectKey1);
        driver.findElement(By.xpath(selector2)).sendKeys(objectKey2);
        driver.findElement(By.xpath(selector3)).sendKeys(objectKey3);
        driver.findElement(By.xpath(selector4)).sendKeys(objectKey4);
        driver.findElement(By.xpath(selector5)).sendKeys(objectKey5);
        driver.findElement(By.xpath(selector6)).sendKeys(objectKey6);*/
        /*var selector1 = page.pageObjects.elements[objectKey1];
        var selector2 = page.pageObjects.elements[objectKey2];
        var selector3 = page.pageObjects.elements[objectKey3];
        var selector4 = page.pageObjects.elements[objectKey4];
        var selector5 = page.pageObjects.elements[objectKey5];
        var selector6 = page.pageObjects.elements[objectKey6];*/
    },

    inputElement2: async function(objectKey1,objectKey2,objectKey3,objectKey4,objectKey5,objectKey6) {
        await driver.sleep(5000);
        var selector1 = page.pageObjects.elements.SSFName;
        var selector2 = page.pageObjects.elements.SSLName;
        var selector3 = page.pageObjects.elements.SSEmail;
        var selector4 = page.pageObjects.elements.SSMobileNumber;
        var selector5 = page.pageObjects.elements.SSCreateNewPassword;
        var selector6 = page.pageObjects.elements.SSConfirmPassword;
        driver.findElement(By.xpath(selector1)).sendKeys(objectKey1);
        driver.findElement(By.xpath(selector2)).sendKeys(objectKey2);
        driver.findElement(By.xpath(selector3)).sendKeys(objectKey3);
        driver.findElement(By.xpath(selector4)).sendKeys(objectKey4);
        driver.findElement(By.xpath(selector5)).sendKeys(objectKey5);
        driver.findElement(By.xpath(selector6)).sendKeys(objectKey6);
    
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
    },
    elementExists1: async function() {
        var select1 = page.pageObjects.elements.SSErrorMessage1;
        var select2 = page.pageObjects.elements.SSErrorMessage2;
        var select3 = page.pageObjects.elements.SSErrorMessage3;
        var select4 = page.pageObjects.elements.SSErrorMessage4;
        var select5 = page.pageObjects.elements.SSErrorMessage5;
        var select6 = page.pageObjects.elements.SSErrorMessage6;

        await driver.sleep(5000);
        return (driver.findElement(By.xpath(select1)) && driver.findElement(By.xpath(select2)) && driver.findElement(By.xpath(select3)) && driver.findElement(By.xpath(select4)) && driver.findElement(By.xpath(select5)) && driver.findElement(By.xpath(select6)));
    }
    
};
