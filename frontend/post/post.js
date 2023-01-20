const webdriver = require("selenium-webdriver");
const { Given, When, Then } = require("@cucumber/cucumber");
const { By, until } = require("selenium-webdriver");
let driver = new webdriver.Builder().forBrowser("chrome").build();
Given(
  "When I go to post Page",
  { timeout: 1000 * 1000 },
  async () => {
    await driver.get("http://localhost:3000/login");
  }
);
When("I input my email", async () => {
  await driver
    .findElement(By.name("email"))
    .sendKeys("manisha13@gmail.com");
});
When("I input my password", async () => {
  await driver.findElement(By.name("password")).sendKeys("Cookies13@");
});
When("I input login", async () => {
  let login = driver.wait(
    until.elementLocated(By.xpath("//button[normalize-space()='Login']"))
  );
  login.click();
});
When("I input profile", async () => {
    setTimeout(async() => {
        await driver.get("http://localhost:3000/profile");
    }, 4000);
});
When("I input add", async () => {
    setTimeout(async() => {
        let post = driver.wait(
            until.elementLocated(By.xpath("//span[normalize-space()='add']")))
    }, 6000);

 


});
When("I search my name", async () => {
  setTimeout(async() => {
    await driver
    .findElement(By.name("name"))
    .sendKeys("hello");
  }, 7000);
});
When("I search my price", async () => {
  setTimeout(async() => {
    await driver
    .findElement(By.name("price"))
    .sendKeys("232");
  }, 7000);
});
When("I search my category", async () => {
  setTimeout(async() => {
    await driver
    .findElement(By.name("category"))
    .sendKeys("Development");
  }, 9000);
});
When("I press content", async () => {
  setTimeout(() => {
    let post = driver.wait(
      until.elementLocated(By.xpath("//div[@id = 'rc-tabs-1-tab-5']"))
);
post.click();
  }, 18000);
});
When("I add content", async () => {
  setTimeout(() => {
    let post = driver.wait(
      until.elementLocated(By.name("basu"))
  );
  post.click();
  }, 22000);
});
When("I press update", async () => {
  setTimeout(() => {
    let post = driver.wait(
      until.elementLocated(By.id("manuu"))
  );
  post.click();
  }, 29000);
});
When("I press yes", async () => {
  setTimeout(() => {
    let post = driver.wait(
      until.elementLocated(By.xpath("//span[normalize-space()='yes']"))
  );
  post.click();
  }, 35000);
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