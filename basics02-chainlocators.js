describe(" All Operations of Calculator", function () {

    it("Addition", function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.driver.manage().window().maximize();
        element(by.model("first")).sendKeys("10");

        //Selecting Addition
        element(by.model("operator")).element(by.css("option[value='ADDITION']")).click();

        element(by.model("second")).sendKeys("5");

        element(by.id("gobutton")).click();

        expect(element(by.css("h2[class = 'ng-binding']")).getText()).toBe("15");

        element(by.css("h2[class = 'ng-binding']")).getText().then(function (text) {
            console.log("The addition of 10 and 5 is " + text);
        })
    })

    it("Division", function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.driver.manage().window().maximize();

        element(by.model("first")).sendKeys("10");

        //Selecting Division
        element(by.model("operator")).element(by.css("option[value='DIVISION']")).click();

        element(by.model("second")).sendKeys("5");

        element(by.id("gobutton")).click();

        expect(element(by.css("h2[class = 'ng-binding']")).getText()).toBe("2");

        element(by.css("h2[class = 'ng-binding']")).getText().then(function (text) {
            console.log("The division of 10 and 5 is " + text);
        })
    })

    it("Modulo Division", function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.driver.manage().window().maximize();

        element(by.model("first")).sendKeys("10");

        //Selecting Modulo Division
        element(by.model("operator")).element(by.css("option[value='MODULO']")).click();

        element(by.model("second")).sendKeys("5");

        element(by.id("gobutton")).click();

        expect(element(by.css("h2[class = 'ng-binding']")).getText()).toBe("0");

        element(by.css("h2[class = 'ng-binding']")).getText().then(function (text) {
            console.log("The modulo division of 10 and 5 is " + text);
        })
    })

    it("Multiplication", function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.driver.manage().window().maximize();

        element(by.model("first")).sendKeys("10");

        //Selecting Multiplication
        element(by.model("operator")).element(by.css("option[value='MULTIPLICATION']")).click();

        element(by.model("second")).sendKeys("5");

        element(by.id("gobutton")).click();

        expect(element(by.css("h2[class = 'ng-binding']")).getText()).toBe("50");

        element(by.css("h2[class = 'ng-binding']")).getText().then(function (text) {
            console.log("The multiplication of 10 and 5 is " + text);
        })
    })

    it("Subtraction", function () {

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.driver.manage().window().maximize();

        element(by.model("first")).sendKeys("10");

        //Selecting Subtraction
        element(by.model("operator")).element(by.css("option[value='SUBTRACTION']")).click();

        element(by.model("second")).sendKeys("5");

        element(by.id("gobutton")).click();

        expect(element(by.css("h2[class = 'ng-binding']")).getText()).toBe("5");

        element(by.css("h2[class = 'ng-binding']")).getText().then(function (text) {
            console.log("The addition of 10 and 5 is " + text);
        })
    })

})