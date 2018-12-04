
	setup();
	
	var presValue;
	var smokeValue;
	var smokeValue1;
	var noiseValue;
	var noiseValue1;
	var noiseValue2;

	loop();

	function loop() {
		if (cpf) {
			presValue = cpf.get("d7");
			document.getElementById("tempValue").innerHTML = presValue;
			smokeValue = cpf.get("a2");	
			smokeValue1 = ((1023 - smokeValue) / 26).toFixed(2);
			document.getElementById("smokeValue").innerHTML = smokeValue1;
			noiseValue = cpf.get("a1");
			noiseValue1 = (noiseValue * 5) / 1023;
			noiseValue2 = (noiseValue1 * 32).toFixed(2);
			document.getElementById("noiseValue").innerHTML = noiseValue2;
		}
		if (tempValue != null && smokeValue != null && noiseValue != null) {
			httpGetAsync("https://innobbatus.000webhostapp.com/sendsors/insert.php?pres=" + presValue + "&smk=" + smokeValue + "&noise=" + noiseValue, 1);
		}
		setTimeout("loop()", 1000);
	}
	


	// cpf setup
	function setup(){
		if(cpf)
			cpf.setPinMode('["resetPin"],["setPinMode", "analog", 2, "INPUT"],["setPinMode", "analog", 1, "INPUT"],["setPinMode", "digital", 7,"INPUT"]');
		
	}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function() { 
//         if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
//             callback(xmlHttp.responseText);
//     }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
