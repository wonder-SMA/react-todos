const puppeteer = require('puppeteer');

import {
  mdiChevronDown,
  mdiChevronRight,
  mdiCheckboxBlankCircleOutline,
  mdiCheckboxMarkedCircleOutline
} from '@mdi/js';

let browser, page;

beforeAll(async () => {
  browser = await puppeteer.launch();
});

describe('h1', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('exits', async () => {
    const text = await page.$eval('div > div > div:nth-child(1) > h1', el => el.textContent);
    expect(text).toBe('todos');
  }, 5000);
});

describe('input', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const isInput = await page.$eval('div > div > div:nth-child(2) > input[placeholder=\'Введите задачу\']', el => !!el);
    expect(isInput).toBe(true);
  }, 5000);

  test('works correctly', async () => {
    await page.click('div > div > div:nth-child(2) > input');
    await page.keyboard.type('React');
    const text = await page.$eval('div > div > div:nth-child(2) > input', el => el['value']);
    expect(text).toBe('React');
  }, 5000);
});

describe('the button named Add todo', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const text = await page.$eval('div > div > div:nth-child(2) > button', el => el.textContent);
    expect(text).toBe('Add todo');
  }, 5000);

  test('adds text to the list', async () => {
    await page.click('div > div > div:nth-child(2) > input');
    await page.keyboard.type('React');

    await page.click('div > div > div:nth-child(2) > button');

    const text = await page.$eval('div > div > ul > li > p', el => el.textContent);
    expect(text).toBe('React');
  }, 5000);
});

describe('the paragraph', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('exits', async () => {
    const text = await page.$eval('div > div > div:nth-child(3) > p', el => el.textContent);
    expect(text).toBe('What needs to be done?');
  }, 5000);
});

describe('the down-arrow', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const value = await page.$eval('div > div > div:nth-child(3) > svg > path', el => el.getAttribute('d'));
    expect(value).toBe(mdiChevronDown);
  }, 5000);

  test('changes to right-arrow when clicking', async () => {
    await page.click('div > div > div:nth-child(3) > svg > path');

    const value = await page.$eval('div > div > div:nth-child(3) > svg > path', el => el.getAttribute('d'));
    expect(value).toBe(mdiChevronRight);
  }, 5000);
});

describe('the checkbox icon', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('is blank when adding text', async () => {
    await page.click('div > div > div:nth-child(2) > input');
    await page.keyboard.type('React');

    await page.click('div > div > div:nth-child(2) > button');

    const value = await page.$eval('div > div > ul > li > svg > path', el => el.getAttribute('d'));
    expect(value).toBe(mdiCheckboxBlankCircleOutline);
  }, 5000);

  test('changes to marked icon when clicking', async () => {
    await page.click('div > div > div:nth-child(2) > input');
    await page.keyboard.type('React');

    await page.click('div > div > div:nth-child(2) > button');

    await page.click('div > div > ul > li > svg > path');
    const value = await page.$eval('div > div > ul > li > svg > path', el => el.getAttribute('d'));
    expect(value).toBe(mdiCheckboxMarkedCircleOutline);
  }, 5000);
});

describe('text', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('turns stricken through when clicking the checkbox icon', async () => {
    await page.click('div > div > div:nth-child(2) > input');
    await page.keyboard.type('React');

    await page.click('div > div > div:nth-child(2) > button');

    await page.click('div > div > ul > li > svg > path');
    const value = await page.$eval('div > div > ul > li > p', el => getComputedStyle(el).textDecoration);
    expect(value.split(' ')[0]).toBe('line-through');
  }, 5000);
});

describe('the information about items left', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('displays correctly', async () => {
    const p = 'div > div > div:nth-child(5) > p';

    const text_0 = await page.$eval(p, el => el.textContent);
    expect(text_0).toBe('0 items left');

    await page.click('div > div > div:nth-child(2) > input');
    await page.keyboard.type('React');

    await page.click('div > div > div:nth-child(2) > button');

    const text_1 = await page.$eval(p, el => el.textContent);
    expect(text_1).toBe('1 items left');

    await page.click('div > div > ul > li > svg > path');

    const text_2 = await page.$eval(p, el => el.textContent);
    expect(text_2).toBe('0 items left');
  }, 5000);
});

describe('the button named All', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const p = 'div > div > div:nth-child(5) > div > button:nth-child(1)';

    const text = await page.$eval(p, el => el.textContent);
    expect(text).toBe('All');

    const border = await page.$eval(p, el => getComputedStyle(el).border);
    expect(border).toBe('1px solid rgb(139, 0, 0)');
  }, 5000);
});

describe('the button named Active', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const text = await page.$eval('div > div > div:nth-child(5) > div > button:nth-child(2)', el => el.textContent);
    expect(text).toBe('Active');
  }, 5000);

  test('works correctly', async () => {
    await page.click('div > div > div:nth-child(2) > input');
    await page.keyboard.type('React');

    await page.click('div > div > div:nth-child(2) > button');
    await page.click('div > div > ul > li > svg > path');

    await page.click('div > div > div:nth-child(5) > div > button:nth-child(2)');
    const inner_html = await page.$eval('div > div > ul', el => el.innerHTML);
    expect(inner_html).toBe('');
  }, 5000);
});

describe('the button named Completed', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const text = await page.$eval('div > div > div:nth-child(5) > div > button:nth-child(3)', el => el.textContent);
    expect(text).toBe('Completed');
  }, 5000);

  test('works correctly', async () => {
    await page.click('div > div > div:nth-child(2) > input');
    await page.keyboard.type('React');

    await page.click('div > div > div:nth-child(2) > button');
    await page.click('div > div > ul > li > svg > path');

    await page.click('div > div > div:nth-child(5) > div > button:nth-child(3)');
    const value = await page.$eval('div > div > ul > li > p', el => getComputedStyle(el).textDecoration);
    expect(value.split(' ')[0]).toBe('line-through');
  }, 5000);
});

describe('the button named Clear completed', () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.setViewport({ width: 1920, height: 1080 });
  });

  test('loads correctly', async () => {
    const text = await page.$eval('div > div > div:nth-child(5) > div > button:nth-child(4)', el => el.textContent);
    expect(text).toBe('Clear completed');
  }, 5000);

  test('works correctly', async () => {
    await page.click('div > div > div:nth-child(2) > input');
    await page.keyboard.type('React');

    await page.click('div > div > div:nth-child(2) > button');
    await page.click('div > div > ul > li > svg > path');

    await page.click('div > div > div:nth-child(5) > div > button:nth-child(4)');
    const inner_html = await page.$eval('div > div > ul', el => el.innerHTML);
    expect(inner_html).toBe('');
  }, 5000);
});


