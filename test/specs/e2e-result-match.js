const { remote } = require('webdriverio'); //using WebdriverIO as a package

describe('Bayout website searching', () => {
    const location = 'Dubai Marina';
    it('should match with the criteria', async () => {
        const browser = await remote({
            capabilities: {
                browserName: 'chrome'
            }
        })
        await browser.url('https://bayut.com')
    
        const locationInput = await browser.$('.a41c4dcc._6a3a3de9')
        await locationInput.setValue(location)
        await locationInput.keys('Enter')
    
        const purposeBtn = await browser.$('.ef5cccac')
        await purposeBtn.click()
        const buyItem = await browser.$('._933a9a61._5dd5033c') 
        await buyItem.click()
    
        const findBtn = await browser.$('.c3901770.f6d94e28')
        await findBtn.click()
    
        const propertiesList = await browser.$('._357a9937').$$('.ef447dde'); //Properties for sale 
        for (let i = 0; i < propertiesList.length; i++){
            const el = await propertiesList[i].$('._7afabd84');
            await expect(el).toHaveTextContaining(location)
        }
    });
});


