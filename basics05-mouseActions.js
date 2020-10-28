describe("Mouse Actions", function () {

    it("Dynamic Dropdowns", function () {

        browser.get("https://qaclickacademy.github.io/protocommerce/");
        browser.driver.manage().window().maximize();

        browser.actions().onmousemove(element(by.css("a[href='/protocommerce/shop']"))).click().perform();
        browser.sleep("3000");
    })
})