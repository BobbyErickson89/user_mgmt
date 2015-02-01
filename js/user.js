// User constructs a new user object. For more details, see
// https://github.com/tiy-durham-fe-2015/curriculum/tree/master/assignments/user_mgmt

function User(spec) {
  // if firstName is undefined or is just a space, throw 'first name is required'
  if (!spec.firstName || spec.firstName.trim() === '') {
    throw 'First name is required';
  }

  var self = {
    firstName: spec.firstName,
    lastName: spec.lastName,
    email: spec.email,

    // this will compare to other users' emails
    equal: function (otherUser) {
      return self.email === otherUser.email;
    }
  };

  return self;
}
// NEED TO PASS AN EVENT WITH DATA FROM THE FORM INTO ABOVE OBJECT



// END OF CODE FROM CHRIS



// Not sure if below variable can be used for whole form
// var fullName = document.getElementsByName('name-form')
