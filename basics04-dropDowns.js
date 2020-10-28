describe("Handling DropDowns", function () {

    function Calculator(numberOne, numberTwo, operation){
        element(by.model("first")).sendKeys(numberOne);
        element(by.model("second")).sendKeys(numberTwo);

        element.all(by.tagName("option")).each(function(item) {
            item.getAttribute("value").then(function(value) {
                if(value == operation){
                    item.click();
                }
            })
        })

        element(by.id("gobutton")).click();
    }

    function PrintHistoryValues(){
        element.all(by.repeater("result in memory")).each(function (historyRow) {
            historyRow.element(by.css("td:nth-child(3)")).getText().then(function (operationResult) {
                console.log("The value is: " + operationResult);
            })
        })
    }

    it("Perform Addition", function () {
        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.driver.manage().window().maximize();

        Calculator(5, 4, "ADDITION");
        Calculator(6, 7, "MULTIPLICATION");
        Calculator(18, 3, "MODULO");
        browser.sleep(2000);

        PrintHistoryValues();
    })
})