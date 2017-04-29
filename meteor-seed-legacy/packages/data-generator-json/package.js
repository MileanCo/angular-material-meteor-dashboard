Package.describe({
  name: 'data-generator-json',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Inserts JSON files into Mongo. Edit paths.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');

  // ALL assets accessed via DataGenerator
  api.export('DataGenerator', 'server');

  // DATA
  //api.addAssets('data/json/records_division_I.json', 'server');

  // SCRIPTS
  api.addFiles('data-generator-json.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('data-generator-json');
  api.addFiles('data-generator-json-tests.js');
});
