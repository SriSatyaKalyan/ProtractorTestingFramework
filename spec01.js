describe("Protractor One Step", function () {
    it('basic program', function () {
       //Write your Protractor Code here
        browser.get('https://angularjs.org').then(function () {
            console.log("I have opened the Angular Page");
        })

        browser.get("http://juliemr.github.io/protractor-demo/")
        browser.sleep("5000");
    })
})