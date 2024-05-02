function randomString(){
	var chars = document.getElementById("chartype").value;
	var stirng_length = document.getElementById("length").value;
	var randomstring="";
	for(var i = 0; i < stirng_length; i++){
		var rnum= Math.floor(Math.random()*chars.length);
		randomstring += chars.substring(rnum, rnum + 1);
	}
	document.randform.randomfield.value = randomstring;
}

function copytext(){
	var thistext = document.getElementById("thistext");
	thistext.select();
	document.execCommand("copy");
	alert("Created password has been copied to clipboard.")
}