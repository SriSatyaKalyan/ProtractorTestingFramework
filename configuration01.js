exports.config = {
    // seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['basics01-basicCalculations.js'],

    capabilities: {
        'browserName': 'chrome'
    }
};