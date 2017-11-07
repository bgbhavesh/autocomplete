Package.describe({
  name: 'bucky:autocomplete',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'an autocomplete with meteor call',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.2');
  api.use('ecmascript');
  api.use([
        'check',
        'ecmascript',
        'underscore',
        'mongo',
        'blaze@2.3.2',
        'templating@1.3.2',
        'reactive-var',
        'tracker',
        'session',
        'templating',
        'fortawesome:fontawesome@4.7.0',
        'reactive-dict',
        'meteorhacks:aggregate@1.3.0'
    ]);
    api.addFiles('server/methods.js', 'server');
	api.addFiles('client/autocomplete.js', 'client');
	api.addFiles('client/autocomplete.html', 'client');
  api.mainModule('autocomplete.js');
});
Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('bucky:autocomplete');
  api.mainModule('autocomplete-tests.js');
});
