var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var SpecReporter = require('jasmine-spec-reporter');


jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'app-spec.js',
    ]
});

jasmine.addReporter(new SpecReporter());

jasmine.execute();
