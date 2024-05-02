function randomString(){
	var chars = document.getElementById("chartype").value;
	var stirng_length = document.getElementById("length").value;
	var randomstring="";
	for(var i = 0; i < stirng_length; i++){
		var rnum= Math.floor(Math.random()*chars.length);
		 //The Math.floor() function returns the largest integer less than or equal to a given number.
		 //Random method: Math.random()*x
		randomstring += chars.substring(rnum, rnum + 1);
		 // string1 = "Hello";   var x = string1.substring(1,4);  Result: x = "ell" 
		 //string.substring(start, end)
	}
	document.randform.randomfield.value = randomstring;
}

function copytext(){
	/* Get the text field */
	var thistext = document.getElementById("thistext");
	/* Select the text field */
	thistext.select();
	/* Copy the text inside the text field */
	document.execCommand("copy");
	/* Alert the copied text */
	alert("Created password has been copied to clipboard.")
}