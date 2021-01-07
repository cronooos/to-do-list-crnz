var charlimit = 200;
var titlelimit = 20;

function counter(obj){
	
	if (obj.value.length > charlimit) {
		obj.value = obj.value.slice(0,charlimit);
	}
	document.getElementById('charcounter').innerHTML = `character count: ${obj.value.length}/${charlimit}`;
}

function titlecounter(obj){
	
	if (obj.value.length > titlelimit) {
		obj.value = obj.value.slice(0,titlelimit);
	}
	document.getElementById('charcounter2').innerHTML = `character count: ${obj.value.length}/${titlelimit}`;
}




