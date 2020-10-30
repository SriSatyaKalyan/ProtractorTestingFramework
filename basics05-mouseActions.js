describe("Mouse Actions", function () {

    // This is not working at the moment as
    // the perform() action is not working


    it("Dynamic Dropdowns", function () {

        browser.get("https://qaclickacademy.github.io/protocommerce/");
        browser.driver.manage().window().maximize();

        //Clicking on the "Shop" section at the top of the page
        element(by.linkText("Shop")).click();

        //Making sure that the number of cards are as expected
        expect(element.all(by.tagName("app-card")).count()).toBe(4);

        //Locating the exact cellphones to be added to the cart
        element.all(by.tagName("app-card")).each(function (appCard){
            appCard.element(by.partialLinkText("Add")).click();
        })

        browser.actions().sendKeys(protractor.Key.HOME);

        browser.actions().
        // onmousemove(element(by.css("a[href='/protocommerce/shop']"))).click();
        browser.sleep("3000");
    })
})