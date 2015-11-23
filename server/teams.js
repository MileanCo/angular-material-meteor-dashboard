Meteor.publish("teams", function () {
  // Mongo Query
  return Teams.find({});
});
