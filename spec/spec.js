var Jasmine = require('jasmine');
var jasmine = new Jasmine();

jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        'app-spec.js',
    ]
});

jasmine.execute();
