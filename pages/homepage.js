const homepage = function() {
    const firstNumber = element(by.model('first'));
    const secondNumber = element(by.model('second'));
    const goButton = element(by.css('[ng-click="doAddition()"]'));
    // const operatorSelect = $('select[ng-model="operator"]');
    const subtractionOperator = element(by.cssContainingText('option', "-"));
    const additionOperator = element(by.cssContainingText('option', "+"));
    const multiplicationOperator = element(by.cssContainingText('option', "*"));
    const divitionOperator = element(by.cssContainingText('option', "/"));
    const moduloOperator = element(by.cssContainingText('option', "%"));

    //actions
    this.get = function(url) {
        browser.get(url);
    }
    this.enterFirstNumber = function(n) {
        firstNumber.sendKeys(n);
    }
    this.enterSecondNumber = function(n) {
        secondNumber.sendKeys(n);
    }
    this.selectSubtraction = function() {
        subtractionOperator.click();
    }
    this.clickGo = function(){
        goButton.click();
    }
    this.verifyResult = function(result) {
        const output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    }
}

module.exports = new homepage();
