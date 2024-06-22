const puppeteer = require("puppeteer");

async function main() {
  try {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Navigate the page to a URL
    console.log("Opening web page.....");
    await page.goto("https://www.indeed.com/");

    // Set screen size
    console.log("Changing screen size.....");
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 1,
      isMobile: false,
      userDataDir: "./tmp",
    });

    // Type into search box
    console.log("typing into search box.....");
    await page.locator("#text-input-what").fill("example");

    // Wait and click on first result
    // const searchResultSelector = ".devsite-result-item-link";
    // await page.waitForSelector(searchResultSelector);
    // await page.click(searchResultSelector);

    // Locate the full title with a unique string
    const textSelector = await page.waitForSelector(
      "text/Customize and automate"
    );
    const fullTitle = await textSelector?.evaluate((el) => el.textContent);

    // Print the full title
    console.log('The title of this blog post is "%s".', fullTitle);

    //   await browser.close();
  } catch (error) {
    console.log(error);
  }
}

main();
