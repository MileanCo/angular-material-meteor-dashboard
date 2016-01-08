Meteor.startup(function (api) {
  if (Records.find().count() === 0) {
    // INSERT DATA TO MONGO
    console.log("Inserting Data to Mongo from packages/data-generator-json/data");
    // data-generator-json package
    // insert EACH record
    _.each(DataGenerator.records_divI, function (records_divI) {
      Records.insert(records_divI);
    });
  }
  if (Teams.find().count() != 0) {
    Teams.remove({});
    console.log("Inserting Data to Mongo from packages/data-generator-json/data");
    // insert EACH team
    _.each(DataGenerator.teams_divI, function (teams_divI) {
      Teams.insert(teams_divI);
    });
  }
});
