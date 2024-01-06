const { Builder, By, until } = require('selenium-webdriver');
jest.setTimeout(30000);
describe('reservation', () => {
  let driver;

  beforeEach(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  });

  afterEach(async () => {
    await driver.quit();
  });

  
  it('should perform reservation', async () => {
    await driver.get('http://localhost:5000/sign-in');
    await driver.findElement(By.id('username')).sendKeys('shehan1234');
    await driver.findElement(By.id('password')).sendKeys('123456');
    await driver.findElement(By.css('.h-screen')).click();
    await driver.findElement(By.id('password')).click();
    await driver.findElement(By.css('div:nth-child(4) > .flex')).click();

    // Enhanced explicit wait for the element to be clickable
    const confirmButton = await driver.wait(
      until.elementLocated(By.css('.swal2-confirm')),
      300000// Increasing the timeout for waiting for the element
    );
    await driver.wait(until.elementIsVisible(confirmButton), 300000);
    await confirmButton.click();
    await driver.findElement(By.css(".gap-3")).click()
    await driver.findElement(By.id("arrivalDate")).click()
    await driver.findElement(By.id("arrivalDate")).click()
    await driver.findElement(By.id("arrivalDate")).sendKeys("0002-12-02")
    await driver.findElement(By.id("arrivalDate")).sendKeys("0020-12-02")
    await driver.findElement(By.id("arrivalDate")).sendKeys("0202-12-02")
    await driver.findElement(By.id("arrivalDate")).sendKeys("2023-12-02")
    await driver.findElement(By.id("departureDate")).click()
    await driver.findElement(By.id("departureDate")).sendKeys("0002-12-02")
    await driver.findElement(By.id("departureDate")).sendKeys("0020-12-02")
    await driver.findElement(By.id("departureDate")).sendKeys("0202-12-02")
    await driver.findElement(By.id("departureDate")).sendKeys("2024-12-02")
    await driver.findElement(By.id("arrivalTime")).click()
    await driver.findElement(By.id("arrivalTime")).click()
    await driver.findElement(By.id("arrivalTime")).sendKeys("13:20")
    await driver.findElement(By.id("departureTime")).click()
    await driver.findElement(By.id("departureTime")).sendKeys("01:20")
    await driver.findElement(By.css(".mb-6:nth-child(3) .peer")).click()
    await driver.findElement(By.id("material-tailwind-select-0")).click()
    await driver.findElement(By.css(".mb-6:nth-child(4) .peer")).click()
    await driver.findElement(By.id("material-tailwind-select-0")).click()
    await driver.findElement(By.css(".inline-flex:nth-child(1) > .text-gray-700")).click()
    const elementToClick = await driver.findElement(By.css(".mx-3:nth-child(2) > .mb-4:nth-child(6) .peer"));
    await driver.executeScript("arguments[0].scrollIntoView()", elementToClick);

    // Click on the element
    await elementToClick.click();


    await driver.findElement(By.css(".mx-3:nth-child(2) > .mb-4:nth-child(6) .peer")).click()
    await driver.findElement(By.css(".mx-3:nth-child(2) > .mb-4:nth-child(6) .peer")).sendKeys("1")
    
    await driver.findElement(By.css(".mb-4:nth-child(7) .peer")).sendKeys("0")

    await driver.findElement(By.css(".min-h-\\[100px\\]")).sendKeys("No")


  })
})