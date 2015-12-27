if (Meteor.isServer) {
  // Write your package code here!
  var records_DI = JSON.parse(Assets.getText('data/json/records_division_I.json'));
  var teams_DI = JSON.parse(Assets.getText('data/json/teams_division_I.json'));

  DataGenerator = {
      records_divI: records_DI,
      teams_divI: teams_DI,
  };
}
