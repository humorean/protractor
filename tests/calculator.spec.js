const homepage = require('../pages/homepage');
describe("super calculator test suit", function(){
    it("should handle addition correctly", function(){
        homepage.get("https://juliemr.github.io/protractor-demo/");
        homepage.enterFirstNumber("7")
        homepage.enterSecondNumber("3")
        homepage.clickGo();
        homepage.verifyResult("10")
        browser.sleep(2000);
    });
    it("should handle dropdown and subtract correctly", function(){
        homepage.get("https://juliemr.github.io/protractor-demo/");
        homepage.enterFirstNumber("7")
        homepage.enterSecondNumber("3")
        // select subtract
        homepage.selectSubtraction();
        homepage.clickGo();
        homepage.verifyResult("9")
        browser.sleep(2000);
    })
})