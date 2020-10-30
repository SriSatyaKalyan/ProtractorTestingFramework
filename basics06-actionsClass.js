describe("Actions Class", function (){

    //ACTIONS class is NOT working

    it("Actions Class on JetBlue.com", function () {
        browser.get("https://www.jetblue.com/");
        browser.driver.manage().window().maximize();

        element(by.xpath("//input[@placeholder = 'Where from?']")).sendKeys(protractor.Key.CONTROL, "a").sendKeys("London");
            // .sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ARROW_DOWN).sendKeys(protractor.Key.ENTER);
        // element(by.xpath("//input[@placeholder = 'Where from?']")).sendKeys(protractor.Key.ARROW_DOWN);

        browser.actions().sendKeys(protractor.Key.ARROW_DOWN);
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN);
        browser.actions().sendKeys(protractor.Key.ENTER);

        browser.sleep(3000);
    })

    // it("Switching Child Windows", function (){
    //     browser.get("https://www.jetblue.com/");
    //     browser.driver.manage().window().maximize();
    //
    //     element(by.xpath("//a[@href = 'https://b6.innosked.com/']")).click();
    //     browser.getAllWindowHandles().then(function (handles){
    //         browser.switchTo().window(handles[1])
    //     })
    //
    // })

})