

const webdriver = require("selenium-webdriver");
const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();

Given(
  "When I go to Registration Page",
  { timeout: 1000 * 1000 },
  async () => {
    await driver.get("http://localhost:3000/register");
  }
);
When("I enter my name", async () => {
  await driver
    .findElement(By.xpath("//input[@placeholder='Enter Your Name']"))
    .sendKeys("Sanju Maharjan");
});

When("I enter my email", async () => {
  await driver
    .findElement(By.name("email"))
    .sendKeys("sanjumaharjan0@gmail.com");
});

When("I enter my password", async () => {
  await driver.findElement(By.name("password")).sendKeys("password");


});

When("I enter my re-password", async () => {
    await driver.findElement(By.name("cf_password")).sendKeys("password");
  
    
  });
When("I press register", async () => {
  let register = driver.wait(
    until.elementLocated(By.xpath("//button[normalize-space()='Register']"))
  );
  register.click();
});

Then("Alert success message is shown", async () => {
  driver
    .wait( until.elementLocated(By.xpath("//div[@class='ant-alert-message']")))
    .getText()
    .then((text) => {
      if (text === "Success") {
        console.log(text);
        return true;
      } else {
        console.log("Fail");
        return false;
      }
    });
});