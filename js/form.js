// VARIABLES FOR SELECTING THE FORM AND INPUT
var firstName = document.querySelector('.first-name');
var lastName = document.querySelector('.last-name');
var email = document.querySelector('.email');
var form = document.querySelector('form');
// EMPTY DIV THAT IS ALREADY IN THE HTML
var currentDiv = document.querySelector(".names-added-container");

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
  console.log(newUser);



  // CREATING NEW ELEMENT TO ADD TO HTML
  var newDiv = document.createElement("div"); //creating a new div container
  var newContent = document.createTextNode(newUser.firstName + ' ' + newUser.lastName); //making object value into text
  newDiv.appendChild(newContent); //adding the object value inside newDiv

  currentDiv.appendChild(newDiv);


  // var currentDiv = document.querySelector(".names-added-container"); //div that is alread in HTML
  // document.body.insertBefore(newDiv, currentDiv) //adding newDiv inside already existing div in HTML







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
