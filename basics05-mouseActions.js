describe("Mouse Actions", function () {

    it("Dynamic Dropdowns", function () {

        browser.get("https://qaclickacademy.github.io/protocommerce/");

        browser.actions().onmousemove(element(by.css("a[href='/protocommerce/shop']"))).click().perform();
        browser.
        browser.sleep("3000");
    })
})