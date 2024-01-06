const { Builder, By, until } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('hotel', () => {
  jest.setTimeout(30000);
  let driver;

  beforeAll(async () => {
    const chromeOptions = new Options().headless(); // If you want to run in headless mode
    driver = await new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('hotel', async () => {
    try {
      await driver.get('http://localhost:5000/sign-in');
      await driver.manage().window().setRect({ width: 1552, height: 880 });

      await driver.findElement(By.id('username')).click();
      await driver.findElement(By.id('username')).sendKeys('shehan1234');

      await driver.findElement(By.id('password')).click();
      await driver.findElement(By.id('password')).sendKeys('123456');

      await driver.findElement(By.css('div:nth-child(4) > .flex')).click();

      // Wait for the element with the class .swal2-confirm and then interact with it
      const confirmButton = await driver.wait(until.elementLocated(By.css('.swal2-confirm')), 10000);
      await driver.wait(until.elementIsVisible(confirmButton), 10000);
      await confirmButton.click();

      // You might add assertions here to verify successful sign-in or other expected behavior
      // For example:
      // const successMessage = await driver.findElement(By.css('.success-message')).getText();
      // expect(successMessage).toContain('Logged in successfully');

    } catch (error) {
      console.error('Test failed:', error);
      throw error;
    }
  });
});
