function randomString(){
	var chars = "";
	if(document.getElementById("Symbols").checked == true){
		chars = chars + document.getElementById("Symbols").value;
	}
	if(document.getElementById("Numbers").checked == true){
		chars = chars + document.getElementById("Numbers").value;
	}
	if(document.getElementById("LChar").checked == true){
		chars = chars + document.getElementById("LChar").value;
	}
	if(document.getElementById("UChar").checked == true){
		chars = chars + document.getElementById("UChar").value;
	}
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
