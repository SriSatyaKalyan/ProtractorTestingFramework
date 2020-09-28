exports.config = {
    // seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['basics02 - chainlocators.js'],

    capabilities: {
        'browserName': 'chrome'
    }
};