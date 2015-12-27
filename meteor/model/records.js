Records = new Mongo.Collection("records");

// collection.allow Meteor function defines the permissions that the client needs to write directly to the collection
Records.allow({
  insert: function (userId, record) {
    // return TRUE if allowed
    return userId && record.owner === userId;
  },
  // fieldNames is an array of the (top-level) fields. ex) ['name', 'score'].
  // modifier is raw Mongo modifier  client executes; ex) {$set: {'name.first': "Alice"}, $inc: {score: 1}}
  update: function (userId, record, fields, modifier) {
    return userId && record.owner === userId;
  },
  remove: function (userId, record) {
    return userId && record.owner === userId;
  }
});

/**
Meteor.methods({
  invite: function (partyId, userId) {
    check(partyId, String);
    check(userId, String);
    var party = Parties.findOne(partyId);
    if (!party)
      throw new Meteor.Error(404, "No such party");
    if (party.owner !== this.userId)
      throw new Meteor.Error(404, "No such party");
    if (party.public)
      throw new Meteor.Error(400,
        "That party is public. No need to invite people.");

    if (userId !== party.owner && ! _.contains(party.invited, userId)) {
      Parties.update(partyId, { $addToSet: { invited: userId } });

      var from = contactEmail(Meteor.users.findOne(this.userId));
      var to = contactEmail(Meteor.users.findOne(userId));

      if (Meteor.isServer && to) {
        // This code only runs on the server. If you didn't want clients
        // to be able to see it, you could move it to a separate file.
        Email.send({
          from: "noreply@arank.com",
          to: to,
          replyTo: from || undefined,
          subject: "PARTY: " + party.title,
          text:
          "Hey, I just invited you to '" + party.title + "' on Socially." +
          "\n\nCome check it out: " + Meteor.absoluteUrl() + "\n"
        });
      }
    }
  },
});
*/
