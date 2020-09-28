exports.config = {
    // seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['basics03 - resultsThroughHistory.js'],

    capabilities: {
        'browserName': 'chrome'
    }
};