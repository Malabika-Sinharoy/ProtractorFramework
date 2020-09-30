describe('Demo Calculator Test', function(){

    it('Addition Test', function(){

        browser.get('https://juliemr.github.io/protractor-demo/');

        element(by.model('first')).sendKeys('5');
        element(by.model('second')).sendKeys('4');
        element(by.css('[ng-click="doAddition()"]')).click();
        let result = element(by.cssContainingText('.ng-binding', '9'));

        expect(result.getText()).toEqual('9')

        browser.sleep(2000)

    })
})