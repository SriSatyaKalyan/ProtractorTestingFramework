describe("Results grabbed through History", function () {
    function Add(a, b){
        element(by.model("first")).sendKeys(a);
        element(by.model("operator")).element(by.css("option[value='ADDITION']")).click();
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }


    it("Result For Addition", function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.driver.manage().window().maximize();

        element(by.model("first")).sendKeys("10");

        //Selecting Addition
        element(by.model("operator")).element(by.css("option[value='ADDITION']")).click();

        element(by.model("second")).sendKeys("5");

        element(by.id("gobutton")).click();

        // expect(element(by.css("h2[class = 'ng-binding']")).getText()).toBe("15");

        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
            expect(text).toBe("15")
        })
    })

    it("Results in Addition", function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.driver.manage().window().maximize();

        Add("10", "5");    //15
        Add("12", "18");   //30
        Add("9", "41");    //50

        expect(element.all(by.css("tr[ng-repeat = 'result in memory']")).count()).toBe(3);

        element.all(by.css("tr[ng-repeat = 'result in memory']")).each(function(historyRow){
            historyRow.element(by.css("td:nth-child(3)")).getText().then(function (result) {
                console.log("One of the result is: " + result);
            })
        })
    })

})