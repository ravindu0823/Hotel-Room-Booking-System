const { Builder, By, until } = require('selenium-webdriver');
jest.setTimeout(30000);

describe('admin', () => {
  let driver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterEach(async () => {
    await driver.quit();
  });

  it('admin', async () => {
    await driver.get('http://localhost:5173/auth/sign-in');
    await driver.manage().window().setRect({ width: 812, height: 864 });
    await driver.findElement(By.css('.relative:nth-child(2) > .peer')).sendKeys('admin');
    await driver.findElement(By.css('.relative:nth-child(4) > .peer')).sendKeys('admin123');
    await driver.findElement(By.css('.mt-48')).click();
    await driver.findElement(By.css('.align-middle')).click();

    // Explicit wait for confirmation button
    const confirmButton1 = await driver.wait(
      until.elementLocated(By.css('.swal2-confirm')),
      10000
    );
    await driver.wait(until.elementIsVisible(confirmButton1), 10000);
    await confirmButton1.click();

    // Explicit wait for adminElement before clicking
    const adminElement = await driver.wait(
      until.elementLocated(By.css('li:nth-child(4) .align-middle')),
      10000
    );
    await driver.wait(until.elementIsVisible(adminElement), 10000);
    await driver.executeScript('arguments[0].scrollIntoView()', adminElement);
    await adminElement.click();

    // Explicit wait for secondaryElement before interacting
    const secondaryElement = await driver.wait(
      until.elementLocated(By.css('tr:nth-child(3) a > .align-middle')),
      10000
    );
    await driver.wait(until.elementIsVisible(secondaryElement), 10000);
    await driver.executeScript('arguments[0].scrollIntoView()', secondaryElement);
    await secondaryElement.click();

    // Explicit wait for the 'persons' element before interacting
    const personsElement = await driver.wait(
      until.elementLocated(By.id('persons')),
      10000
    );
    await driver.wait(until.elementIsVisible(personsElement), 10000);
    await personsElement.sendKeys('4');
    await driver.findElement(By.css(".bg-blue-500")).click();

    // Explicit wait for the confirmation button after clicking the .bg-blue-500 button
    const confirmButton2 = await driver.wait(
      until.elementLocated(By.css('.swal2-confirm')),
      10000
    );
    await driver.executeScript("window.scrollTo(0,0)");
  });
});