let homepage = function(){

    let firstnumber_input = element(by.model('first'));
    let secondnumber_input = element(by.model('second'));
    let click_btn = element(by.css('[ng-click="doAddition()"]'));



    this.launchBrowser = function(url){
    browser.get(url);

    }

    this.enterFirstnumber = function(firstno){
    firstnumber_input.sendKeys(firstno);
    };

    this.enterSecondnumber =function(secondno){
    secondnumber_input.sendKeys(secondno);
    };

    this.clickGo = function(){
    click_btn.click();
    };

    this.verifyResult = function(result){
    let output = element(by.cssContainingText('.ng-binding', result));

    expect(output.getText()).toEqual(result)
    }


};

module.exports = new homepage();
