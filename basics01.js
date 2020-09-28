describe("Super Calculator - Protractor Baby Steps", function () {

    console.log("Running the first Locators file");

    it("Simple Addition", function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("3");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();
        //     .then(function () {   //Trying to resolve a promise
        //     browser.sleep("3000");
        // })

        //Jasmine takes care of promise resolution
        expect(element(by.css("h2[class = 'ng-binding']")).getText()).toBe("8");

        element(by.css("h2[class = 'ng-binding']")).getText().then(function (text) {
            console.log("The addition of 3 and 5 is " + text);
        })
    });

    it("Chain Locators", function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("4");
        element(by.id("gobutton")).click();

        //Chain locators
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log("The addition of 4 and 4 gives us " + text);
        })
    });

});