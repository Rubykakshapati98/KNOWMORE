

const webdriver = require("selenium-webdriver");
const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();

Given(
  "When I go to Login Page",
  { timeout: 1000 * 1000 },
  async () => {
    await driver.get("http://localhost:3000/login");
  }
);

When("I search my email", async () => {
  await driver
    .findElement(By.name("email"))
    .sendKeys("sanjumaharjan683@gmail.com");
});

When("I hi my password", async () => {
  await driver.findElement(By.name("password")).sendKeys("Cookies13@");


});


When("I press login", async () => {
  let login = driver.wait(
    until.elementLocated(By.xpath("//button[normalize-space()='Login']"))
  );
  login.click();
});

Then("successfull message is shown", async () => {
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