const puppeteer = require("puppeteer");

async function main() {
  try {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate the page to a URL
    console.log("Opening web page...");
    await page.goto("https://www.indeed.com/");

    // Set screen size
    console.log("Changing screen size...");
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
      isMobile: false,
      slowMo: 250,
      userDataDir: "./tmp",
    });

    // Type into the search box
    console.log("Typing into search box...");
    const searchBoxSelector = "#text-input-what";
    await page.waitForSelector(searchBoxSelector);
    await page.type(searchBoxSelector, "Entry level Software engineer");

    // Wait and click on the search button
    const searchResultSelector = ".yosegi-InlineWhatWhere-primaryButton";
    console.log("Clicking search button...");
    await page.waitForSelector(searchResultSelector);
    await page.click(searchResultSelector);

    // Wait for the search results to load
    console.log("Waiting for search results...");
    await page.waitForNavigation();

    // Click on experience level button
    const experienceButton = "#filter-explvl";
    console.log("Clicking experience level button...");
    await page.waitForSelector(experienceButton);
    await page.click(experienceButton);

    // Wait for the experience level filter options to load

    // await browser.close();
  } catch (error) {
    console.log(error);
  }
}

main();
