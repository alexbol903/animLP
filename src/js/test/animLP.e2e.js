const puppetter = require('puppeteer');
  

describe('#: animLP works with e2e tests', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppetter.launch({ headless: false });
    page = await browser.newPage();
    await page.goto(`http://localhost:3000/`);
  });

  afterAll(async () => {
    await browser.close();
  });

  it('before animation elements', async () => {
    await page.waitFor(10);
    const el_0 = await page.$$eval('.up-1', el => el[ 0 ].classList.contains('animlp'));
    const element = await page.$$eval('.animlp', el => el);
    const el_1 = await page.$$eval('.up-1', el => el[ 1 ].classList.contains('animlp'));
    const style = await page.$eval('.up-1', el => el.getAttribute('style'));

    await expect(el_0).toBeTruthy();
    await expect(el_1).toBeTruthy();
    await expect(element).toHaveLength(8);
    await expect(style).not.toBeNull();

  }, 16000);

  it('after animation elements', async () => {
    await page.waitFor(1500);
    const element = await page.$$eval('.animlp', el => el);
    const el_0 = await page.$$eval('.up-1', el => el[ 0 ].classList.contains('animlp'));
    const el_1 = await page.$$eval('.up-1', el => el[ 1 ].classList.contains('animlp'));
    const style = await page.$eval('.up-1', el => el.getAttribute('style'));

    await expect(el_0).toBeFalsy();
    await expect(el_1).toBeTruthy();
    await expect(element).toHaveLength(4);
    await expect(style).toBeNull();
  }, 16000);

  it('start load page with second screen', async () => {
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
    await page.reload();
    await page.waitFor(1500);
    const element = await page.$$eval('.animlp', el => el);
    const el_0 = await page.$$eval('.up-1', el => el[ 0 ].classList.contains('animlp'));
    const el_1 = await page.$$eval('.up-1', el => el[ 1 ].classList.contains('animlp'));

    await expect(el_0).toBeTruthy();
    await expect(el_1).toBeFalsy();
    await expect(element).toHaveLength(4);
  }, 16000);

});