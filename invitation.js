var rName,
  oName,
  wURL,
  hName,
  date,
  volunteers,
  vCount,
  nMessage,
  vId,
  indexImages,
  bannerImg,
  pause,
  imgs,
  characterFormat,
  nameFormat,
  phoneNumberFormat,
  passwordVerify,
  username,
  password,
  firstName,
  lastName,
  emailAddress,
  phoneNumber, 
  newsletterSignUp;

// function that will create the invitation message for each volunteer
function getInfo() {
  vCount = document.getElementById("nVolunteers").value;
  nMessage = "";
  for (i = 1; i <= vCount; i++) {
    vId = "vForm" + i;

    // getting the input value name that matches the id field
    rName = document.getElementById(vId).value;
    oName = document.getElementById("oName").value;
    date = document.getElementById("date").value;
    wURL = document.getElementById("wURL").value;
    hName = document.getElementById("hName").value;

    nMessage +=
      "<article id='placeholderContent'>Hello <span id='recipientName'>" +
      rName +
      "</span>!<br/><br/>You have been invited to volunteer for an event held by <span id='organizationName'>" +
      oName +
      "</span> on <span id='eventDate'>" +
      date +
      "</span>. Please come to the following website: <span id='websiteURL'>" +
      wURL +
      "</span> to sign up as a volunteer.<br/><br/> Thanks!<br/><span id='hostName'>" +
      hName +
      "</span><br/><br/></article>";
  }
  document.getElementById("invitationMessage").style.visibility = "visible";
  document.getElementById("invitationMessage").innerHTML = nMessage;

  return false;
}

// function that will register the enter key and create the numeric number entered for volunter name input field
function newFields() {
  vCount = document.getElementById("nVolunteers").value;
  if (event.keyCode === 13) {
    nMessage = "";
    for (i = 1; i <= vCount; i++) {
      nMessage +=
        "<label for='vForm'>Recipient name " +
        "" +
        i +
        ":</label> <input type='text' name='vForm' id='vForm" +
        i +
        "'placeholder='Enter your Recipient Name'/><br>";
    }
    document.getElementById("countFields").innerHTML = nMessage;
  }
}

// function to get the source images to preload the images at the top of the page
indexImages = [];
bannerImg = 0;
pause = false;

function onpageload() {
  // getting the source of all images in docuemnt and then preloading them
  for (i = 0; i < indexImages.length; i++) {
    imgs = new Image();
    imgs.src = indexImages[i].src;
  }
}

function bannerCycle() {
  if (!pause) {
    // loop to hide banner images
    for (i = 0; i < indexImages.length; i++) {
      indexImages[i].style.display = "none";
    }

    // counter that will display the next image
    bannerImg++;
    if (bannerImg == indexImages.length) {
      bannerImg = 0;
    }
    indexImages[bannerImg].style.display = "block";
  }

  // calling Bannercycle function after 3 seconds to display the next image
  setTimeout(bannerCycle, 3000);
}

window.onload = () => {
  // getting the img tag & section ID bannerImages images in index.html & gallery.html
  indexImages = document
    .getElementById("bannerImages")
    .getElementsByTagName("img");

  onpageload();
  bannerCycle();

  document.getElementById("bannerImages").onmouseover = function (e) {
    pause = true;
  };
  document.getElementById("bannerImages").onmouseout = function (e) {
    pause = false;
  };
};


// function that will validate the registration form and setting regex for user input fields

//  characterFormat,phoneNumberFormat,passwordVerify,username,password,firstName,lastName,emailAddress,phoneNumber, newsletterSignUp;

function formValidation(){
    characterFormat = "^[a-z A-Z0-9]+$"; //lower & upper case alphabet characters with a space & number
    nameFormat = "^[a-z A-Z]+$"; //lower & upper case alphabet characters & space
    phoneNumberFormat = "^[1-9][0-9]{9}$"; // validation that will only allow for number input no great than 10

    // retrieving elements by class name 
    username = document.getElementsByName("userName")[0].value;
    password = document.getElementsByName("password")[0].value;
    passwordVerify = document.getElementsByName("passwordVerify")[0].value;
    firstName = document.getElementsByName("firstName")[0].value;
    lastName = document.getElementsByName("lastName")[0].value;
    emailAddress = document.getElementsByName("email")[0].value;
    phoneNumber = document.getElementsByName("phoneNumber")[0].value;
    newsletterSignUp = document.getElementsByName("signUpNewsletter")[0].value;

    // creating if statements for regex validation 
    if (username == "") {
        document.getElementsByNameId("usernameError").innerHTML = 'Username required.';
        return false;
    }
    if(!username.match(characterFormat)){
        document.getElementsById("usenameError").innerHTML = 'Invalid username format.';
        return false;
    }
    // password lenght with a minimum of 8 characters
    if (password.length < 8 || password == ""){
        document.getElementsById("passwordError").innerHTML = 'Password needs to be atleast 8 characters long.';
        return false;
    }
    if (passwordVerify.length <8 || passwordVerify ==""){
        document.getElementsById("passwordVerifyerror").innerHTML = 'Password needs to be atleast 8 characters long.';
        return false;
    }

    // checking to ensure password & password verify are the same
    if (passwordVerify != password){
        document.getElementsById('passwordVerifyerror').innerHTML = 'Passwords do not match.';
        return false;
    }

    if (firstName = ""){
        document.getElementsById("errorfirstName").innerHTML = 'Please enter first name.'
        return false;
    }

    // returning error if fields do not match regex validation 
    if (!firstName.match(nameFormat)){
        document.getElementsById("errorfirstName").innerHTML = 'First name invalid.';
        return false;
    }
    if (lastName = "") {
        document.getElementsById('errorlastName').innerHTML = 'Please enter last name.';
        return false;
    }
    if (!lastName.match(nameFormat)){
        document.getElementsById('errorlastName').innerHTML = 'Last name invalid.';
        return false;
    }
    if (emailAddress == ""){
        document.getElementsById("erroremailAddress").innerHTML = 'Please enter email address.';
        return false;
    }
    if (emailAddress.indexOf('@', 0) < 0){
        document.getElementsById("erroremailAddress").innerHTML = 'Email address invalid.';
        return false;
    }
    if (phoneNumber == ""){
        document.getElementsById("errorphoneNumber").innerHTML = 'Phone number invalid';
        return false;
    }
    if ((newsletterSignUp[0]. checked == false) && (newsletterSignUp[1].checked == false)){
        document.getElementsById("errornewsletter").innerHTML = 'Please select Yes or No.';
        return false;
    }
}