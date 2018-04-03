const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
async function run() {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 1000
    })
    await page.goto('https://www.bershka.com/es/mujer-c1010193132.html', {
        waitUntil: 'domcontentloaded'
    });
    page.addStyleTag({
        path: './css/css.css'
    });
    const inputElement = await page.$('.header__searchMobile');
    page.addScriptTag({
        path: './js/js.js'
    });
}
run();