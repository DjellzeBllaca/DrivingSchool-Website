function isEmailOk(inputField, helpId) {
	return editNodeText(/^[a-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,18}$/, 
		inputField.value, helpId, "Ex. example@somehost.com.com");
	}
	
	function isNameOk(inputField, helpId) {        
	return editNodeText(/^[a-zA-Z ]{2,15}\s[a-zA-Z ]{2,15}$/, 
		inputField.value, helpId, "Please enter name and surname.");
	}

	function isPhoneOk(inputField, helpId) {       
return editNodeText(/^[0-9+]{3,6}[-\s]{1,2}[0-9\s-]{4,10}$/,
	inputField.value, helpId, "Ex.+333 333 333");
	}
	
	function isStreetOk(inputField, helpId) {       
	return editNodeText(/^[A-Za-z0-9\.\' \-]{5,30}$/, 
		inputField.value, helpId, "Ex.1234 Main St.");
	}
	
	function isCityOk(inputField, helpId) {       
	return editNodeText(/^[A-Za-z0-9\.\' \-]{5,30}$/, 
		inputField.value, helpId, "Please enter a valid city.");
	}
	
	function isWebsiteOk(inputField, helpId) {       
	return editNodeText(/^[A-Za-z'.-/:]+\.[A-Za-z0-9\-]{2,15}$/, 
		inputField.value, helpId, "Please enter a valid website.");
	}
	
	function isNoCardOk(inputField, helpId) {      
	return editNodeText(/^[0-9]{3,5}[\s]{1}[0-9]{3,6}[\s]{1}[0-9]{3,6}[\s]{1}[0-9]{3,6}$/, 
	inputField.value, helpId, "Ex. 3000 3000 3000 3000");
	}
	
	function editNodeText(pattern,input,helpId,helpMessage){        
	
	if (!pattern.test(input)) { 
		if (helpId != null)
		while (helpId.firstChild) 
			helpId.removeChild(helpId.firstChild);
		helpId.appendChild(document.createTextNode(helpMessage)); 
		return false;
	}

	else {          
		if (helpId != null){
			while (helpId.firstChild) 
				helpId.removeChild(helpId.firstChild);
		}
		return true;
	} 
}

document.getElementById("frm").onsubmit = function(e){
	var email=document.getElementById("email");
	var emailHelp = 	email.nextElementSibling;
	var name=document.getElementById("name");
	var nameHelp=name.nextElementSibling;	
	var phone=document.getElementById("phone");
	var phoneHelp = 	phone.nextElementSibling;
	var street=document.getElementById("street");
	var streetHelp = 	street.nextElementSibling;
	var city=document.getElementById("city");
	var cityHelp = 	city.nextElementSibling;
	var website=document.getElementById("website");
	var websiteHelp = 	website.nextElementSibling;
	var noCard=document.getElementById("noCard");
	var noCardHelp = 	state.nextElementSibling;
		
	
		
	if(!isEmailOk(email,emailHelp) &&
	    !isNameOk(name, nameHelp) && 
		!isPhoneOk(phone,phoneHelp) && 
		!isStreetOk(street,streetHelp) && 
		!isCityOk(city,citytHelp) && 
		!isWebsiteOk(website,websiteHelp) &&
		!isNoCardOk(noCard,noCardHelp)		
		
		 ){
		
		e.preventDefault();
	}
};

function myFunction() {
  var x = document.getElementById("myPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function myFunction1() {
  var x = document.getElementById("myPassword1");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


	
function Validate(){
  if (document.getElementById('myPassword').value ==
    document.getElementById('myPassword1').value) {
    document.getElementById('matching').style.color = 'green';
    document.getElementById('matching').innerHTML = 'Matching';
  } else {
    document.getElementById('matching').style.color = 'red';
    document.getElementById('matching').innerHTML = 'not Matching';
  }
}

function validateForm() {
  var a = document.forms["frm"]["email"].value;
  var b = document.forms["frm"]["myPassword"].value;
  var c = document.forms["frm"]["myPassword1"].value;
  var d = document.forms["frm"]["name"].value;
  var e = document.forms["frm"]["phone"].value;
  var f = document.forms["frm"]["street"].value;
  var g = document.forms["frm"]["city"].value;
  var h = document.forms["frm"]["capital"].value;
  var i = document.forms["frm"]["website"].value;
  var j = document.forms["frm"]["bank"].value;
  var k = document.forms["frm"]["noCard"].value;
  var l = document.forms["frm"]["gender"].value;
  var m = document.forms["frm"]["day"].value;
  var n = document.forms["frm"]["month"].value;
  var o = document.forms["frm"]["year"].value;
  var p = document.forms["frm"]["nationality"].value;
 
  if ((a && b && c && d&& e && f && g && h && i&& j&& k && l && m && n && o && p) == "") {
    alert("The register must be filled out");
    return false;
  }
}

function validateForm1() {
 
  var x = document.forms["frm1"]["username"].value;
  var y = document.forms["frm1"]["fjalkalimi"].value;
 
  if ((x && y) == "") {
    alert("The login must be filled out");
    return false;
  }
}