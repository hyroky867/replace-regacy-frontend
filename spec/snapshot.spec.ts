import path from 'path';
import puppeteer, { Browser, Page } from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });

describe('TODOアプリ', () => {
  let browser: Browser;
  let page: Page;
  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: true,
    });
    page = await browser.newPage();

    await page.goto(`file://${path.resolve(__dirname, '../index.html')}`);
  });

  afterEach(async () => {
    await browser.close();
  });

  it('初期表示', async () => {
    expect(await page.content()).toMatchSnapshot();
  });

  it('タスクの追加', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    expect(await page.content()).toMatchSnapshot();
  });

  it('タスクの入力', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    await page.type('.todo:nth-child(1) input', 'サンプルタスク1');
    await page.type('.todo:nth-child(2) input', 'サンプルタスク2');
    expect(await page.content()).toMatchSnapshot();
  });

  it('タスクの削除', async () => {
    await page.click('#addTodo');
    await page.click('#addTodo');
    await page.type('.todo:nth-child(1) input', 'サンプルタスク1');
    await page.type('.todo:nth-child(2) input', 'サンプルタスク2');
    await page.click('.todo:nth-child(1) .delete');
    await page.click('.todo:nth-child(1) .delete');
    expect(await page.content()).toMatchSnapshot();
  });
});
