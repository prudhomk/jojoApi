const puppeteer = require('puppeteer');

const browser = await puppeteer.launch({
  headless: false,
});

const page = await browser.newPage();
await page.setRequestInterception(true);

await page.goto('https://jojowiki.com/Category:Characters');

