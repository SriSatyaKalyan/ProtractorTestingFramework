exports.config = {
    // seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['basics04-dropDowns.js'],

    capabilities: {
        'browserName': 'chrome'
    }
};