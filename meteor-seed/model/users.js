

Meteor.methods({
  updateProfile: function (profile) {
    var user = Meteor.user();
    if (user) {
      // Check if fields provided
      if (! profile.first_name ) {
        throw new Meteor.Error(500, "Failed, first name too short!");
      }
      if (! profile.last_name) {
        throw new Meteor.Error(500, "Failed, last name too short!");
      }
      // Check fields are right type
      check (profile.first_name, String);
      check (profile.last_name, String);

      Meteor.users.update( {_id: Meteor.userId() },
        { $set: {
          "profile" : profile,
          //"profile.first_name": profile.first_name,
          //"profile.last_name": last_name,
          //"profile.lastname": lastname,
        }}
      );
      console.log(user) ;

      return "Updated profile for user" + profile.first_name;
    }
    throw new Meteor.Error(500, "Failed, user not logged in!");
  }
});
