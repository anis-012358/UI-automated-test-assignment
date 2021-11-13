const fetch = require('node-fetch');
const assert = require('assert');

describe('Popular Searches links', () => {
  
    it('should work correctly', async () => {
        await browser.url('https://bayut.com')

        const popularSearchesSectionDiv = await browser.$('._2fddc99a')
        await popularSearchesSectionDiv.scrollIntoView();
        
        const toRentTab = await popularSearchesSectionDiv.$('div=To Rent') //the class name is changing
        await toRentTab.click() 

        //Validate links under 'Dubai apartments' are functioning correctly
        const columnTitle = await popularSearchesSectionDiv.$('=Dubai Apartments')
        const column = await columnTitle.$(function () { return this.parentNode.nextSibling})
        const links = await column.$$('._78d325fa')
        const toroldKI = await links[0].getAttribute('href');
        
        for (let i = 0; i < links.length; i++){
            const href = await links[i].getAttribute('href');
            await browser.call(async() => {
                await fetch('http://bayut.com' + href)
                    .then((res) => expect(res.status).toEqual(200)) //200 OK 
            })
        }
        
    });
});