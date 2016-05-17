var nameIcantSpel = Meteor.users.findOne({username: 'sacha'});
Roles.removeUserFromRoles( nameIcantSpel._id, ["admin"] );
Roles.addUserToRoles( nameIcantSpel._id ,  ["underpaidWorker"] );