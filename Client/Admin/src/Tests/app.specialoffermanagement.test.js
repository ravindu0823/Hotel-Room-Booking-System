const { Builder, By, Key, until } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const assert = require('assert');

describe('offer', () => {
  jest.setTimeout(30000);
  let driver;
  let vars;

  beforeAll(async () => {
    let options = new Options();
    options.windowSize({ width: 1552, height: 880 });
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
    vars = {};
  });

  afterAll(async () => {
    await driver.quit();
  });

  it('offer', async () => {
    await driver.get('http://localhost:5173/auth/sign-in');
    await driver.findElement(By.css('.relative:nth-child(2) > .peer')).sendKeys('admin');
    await driver.findElement(By.css('.relative:nth-child(4) > .peer')).sendKeys('admin123');
    await driver.findElement(By.css('.align-middle')).click();
    await driver.wait(until.elementLocated(By.css('.swal2-confirm')), 5000);
    await driver.findElement(By.css('.swal2-confirm')).click();


    const element = await driver.findElement(By.css('li:nth-child(6) .block'));
    await driver.executeScript("arguments[0].scrollIntoView(true);", element);

    await driver.findElement(By.css('li:nth-child(6) .block')).click();

    const bodyElement = await driver.findElement(By.css('body'));
    await driver.executeScript("window.scrollTo(0, 0);");

    const greenElement = await driver.findElement(By.css('.bg-green-500'));
    await driver.executeScript("arguments[0].click();", greenElement);

    

    await driver.findElement(By.id('OfferNameInput')).click();
    const dropdown = await driver.findElement(By.id('OfferNameInput'));
    await dropdown.findElement(By.xpath("//option[. = 'Food Offer']")).click();

    await driver.findElement(By.id('PriceInput')).click();
    await driver.findElement(By.id('PriceInput')).sendKeys('120');
    await driver.findElement(By.id('DescriptionInput')).click();
    await driver.findElement(By.id('DescriptionInput')).sendKeys('100% discount');

    await driver.findElement(By.css('.bg-green-500')).click();
    await driver.wait(until.elementLocated(By.css('.swal2-confirm')), 5000);
    await driver.findElement(By.css('.swal2-confirm')).click();
  });
});