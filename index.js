const puppeteer = require("puppeteer");
const puppeteerExtra = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");

const { executablePath } = require("puppeteer");
async function main() {
  puppeteerExtra.use(pluginStealth());
  try {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch(
      { headless: false },
      { executablePath: executablePath() }
    );
    const page = await browser.newPage();

    // Navigate the page to a URL
    console.log("Opening web page...");

    await page.goto("https://www.indeed.com", {
      waitUntil: "load",
      timeout: 10000,
    });

    // Set screen size
    console.log("Changing screen size...");
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
      isMobile: false,
      slowMo: 300,
      userDataDir: "./tmp",
    });

    // Type into the search box

    console.log("Typing into search box...");
    const searchBoxSelector = "#text-input-what";
    await page.waitForSelector(searchBoxSelector, {
      visible: true,
      timeout: 10000,
    });
    // type into search bar criteria
    await page.locator(searchBoxSelector).fill("Entry level Software engineer");

    // Wait for selector
    const searchResultSelector = ".yosegi-InlineWhatWhere-primaryButton";
    console.log("Clicking search button...");
    await page.waitForSelector(searchResultSelector, {
      visible: true,
    });
    // clicking on selector
    await page.locator(searchResultSelector).click();
    await page.waitForNavigation({
      waitUntil: "load",
      timeout: 10000,
    });
    // Wait for the search results to load
    console.log("Waiting for search results...");

    // waiting
    delay(4000000);

    // Click on experience level button

    const experienceButton = "#filter-explvl";
    console.log("Clicking experience level button...");
    await page.waitForSelector(experienceButton, {
      visible: true,
      timeout: 10000,
    });
    delay(4000000);
    delay(4000000);
    delay(4000000);
    delay(4000000);
    delay(4000000);
    delay(4000000);
    delay(4000000);
    delay(4000000);
    delay(4000000);
    delay(4000000);
    await page.click(experienceButton);
    console.log("click");
    // Wait for the experience level filter options to load
    //TODO use evaluate to click on button posible solution change class or click
    // @ use this class="yosegi-FilterPill-pillList css-zhqt0z eu4oa1w0" parent container
    // await browser.close();
  } catch (error) {
    console.log(error);
  }
}

function delay(time) {
  console.log("slowing down a bit");
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
}

main();
