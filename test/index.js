const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require('chromedriver');
async function triangleTest() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get('http://localhost:3002');
    await driver.findElement(By.id('base')).sendKeys('30');
    await driver.findElement(By.id('height')).sendKeys('35');
    await driver.findElement(By.id('calcButton')).click();
    const areaInput = await driver.findElement(By.id('area')).getAttribute('value');
    console.log(areaInput)
    await driver.close();
}
triangleTest();
