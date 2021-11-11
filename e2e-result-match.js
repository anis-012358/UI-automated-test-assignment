const { remote } = require('webdriverio'); //using WebdriverIO as a package

;(async () => {
    const browser = await remote({
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://bayut.com')

    const locationInput = await browser.$('.a41c4dcc._6a3a3de9')
    await locationInput.setValue('Dubai Marina')
    await locationInput.keys('Enter')

    const purposeBtn = await browser.$('.ef5cccac')
    const buyItem = await browser.$('._933a9a61._5dd5033c._8bfc3747')
    await purposeBtn.click()
    await buyItem.click()

    const findBtn = await browser.$('.c3901770.f6d94e28')
    await findBtn.click()

    const propertiesList = await browser.$('._357a9937').$$('.ef447dde'); //Properties for sale 
    propertiesList.forEach(async function(element) {
        const el = await element.$('div*=Dubai Marina');
        console.log(await el.isExisting())
    });

})()
