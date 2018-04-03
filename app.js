/*const fs = require('fs');
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
run();*/
/*const fs = require('fs');
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
run();*/
const express = require('express');
const app = express();
const puppeteer = require('puppeteer');
const port = process.env.PORT || 8080;
const validUrl = require('valid-url');
var parseUrl = function(url) {
    url = decodeURIComponent(url)
    if (!/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = 'http://' + url;
    }
    return url;
};
app.get('/', function(req, res) {
    var urlToScreenshot = parseUrl(req.query.url);
    if (validUrl.isWebUri(urlToScreenshot)) {
        console.log('Screenshotting: ' + urlToScreenshot);
        (async () => {
            const browser = await puppeteer.launch({
                //headless: false,
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
            await page.screenshot().then(function(buffer) {
                res.setHeader('Content-Disposition', 'attachment;filename="' + urlToScreenshot + '.png"');
                res.setHeader('Content-Type', 'image/png');
                res.send(buffer)
            });
            //await browser.close();
        })();
    } else {
        res.send('Invalid url: ' + urlToScreenshot);
    }
});
app.listen(port, function() {
    console.log('App listening on port ' + port)
})