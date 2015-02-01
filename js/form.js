// VARIABLES FOR SELECTING THE FORM AND INPUT
var firstName = document.querySelector('.first-name');
var lastName = document.querySelector('.last-name');
var email = document.querySelector('.email');
var form = document.querySelector('form');

// VARIABLES FOR STORING OBJECTS
var userStore = ObjectStore();
var test = userStore.query();

// var makeElement = document.createElement

function addUser() {
  // CREATING THE OBJECT FROM THE INPUT
  var newUser = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  };

  // STORING THE OBJECT IN OBJECT STORE
  userStore.add(User(newUser));
  console.log(newUser)

  

  console.log(test);





  // SETTING INPUT BACK TO BLANK SPACE
  firstName.value = "";
  lastName.value = "";
  email.value = "";


};





// SETTING UP SUBMIT BUTTON
form.addEventListener('submit', function(e) {
  e.stopPropagation();
  e.preventDefault();
  addUser();
});
