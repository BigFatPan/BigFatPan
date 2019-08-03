var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/test.jpg') {
		myImage.setAttribute ('src', 'images/test2.jpg');
	} else {
		myImage.setAttribute ('src', 'images/test.jpg')
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'Знакомся, ' + myName + ', это Молли!';
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'Знакомся, ' + storedName + ', это Молли!';
}

myButton.onclick = function() {
  setUserName();
}