let homepage = require('../pages/homepage');

describe('Demo Calculator', function(){

    it('Addition Test', function(){

        homepage.launchBrowser('https://juliemr.github.io/protractor-demo/')

        homepage.enterFirstnumber('4');

        homepage.enterSecondnumber('6');

        homepage.clickGo();

        homepage.verifyResult('10')

        browser.sleep(2000)
    }),

    it('Subtraction Test', function(){

        homepage.launchBrowser('https://juliemr.github.io/protractor-demo/')

        homepage.enterFirstnumber('4');

        homepage.enterSecondnumber('6');

        homepage.clickGo1();

        homepage.verifyResult('10');

        browser.sleep(2000)
    })
})