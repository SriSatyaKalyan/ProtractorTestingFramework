exports.config = {
    // seleniumAddress : 'http://localhost:4444/wd/hub',
    specs: ['basics05-mouseActions.js'],

    capabilities: {
        'browserName': 'chrome'
    }
};