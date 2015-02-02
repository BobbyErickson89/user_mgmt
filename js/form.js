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
  var newDiv = document.createElement('div'); //creating a new div container
  var newSpan1 = document.createElement('span'); //creating a new span for user's name
  var newSpan2 = document.createElement('span'); //creating a new span for email

  var newFullName = document.createTextNode(newUser.firstName + ' ' + newUser.lastName);
  var newEmail = document.createTextNode(newUser.email);
  //turning names in object value into text

  newDiv.appendChild(newSpan1); //adding newSpan1 inside newDiv
  newDiv.appendChild(newSpan2); //adding newSpan2 inside newDiv

  newSpan1.appendChild(newFullName); //adding newFullName into newSpan1
  newSpan2.appendChild(newEmail); //adding newEmail into newSpan2

  newSpan2.setAttribute('style', 'float:right;'); //floats the email addrest that
  // we placed in newSpan2 to the right


  currentDiv.appendChild(newDiv); //adding the newDiv into the already
                                  // existing one in HTML


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
  addUser(); //running 'addUser function'
});
