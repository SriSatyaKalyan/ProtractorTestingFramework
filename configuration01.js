exports.config = {
    // seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['basics01.js'],

    capabilities: {
        'browserName': 'chrome'
    }
};