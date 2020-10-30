exports.config = {
    // seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['basics06-actionsClass.js'],

    capabilities: {
        'browserName': 'chrome'
    }
};