	setup();
	
	var tempValue;
	var smokeValue;
	var noiseValue;
	
	loop();

	function loop() {
		if (cpf) {
			tempValue = cpf.get("d3");
			document.getElementById("tempValue").innerHTML = tempValue;
			smokeValue = cpf.get("a2");	
			document.getElementById("smokeValue").innerHTML = smokeValue;
			noiseValue = cpf.get("a1");
			noiseValue = (noiseValue * 5) / 1023;
			noiseValue = (noiseValue * 26);
			document.getElementById("noiseValue").innerHTML = noiseValue;
		}
// 		if (tempValue != 0 && smokeValue != 0 && noiseValue != 0) {
// 			callPHP('temp=' + tempValue + '&smk=' + smokeValue + '&noise=' + noiseValue)
// 		}
		setTimeout("loop()", 1000);
	}
	
	function callPHP(params) {
    		var httpc = new XMLHttpRequest(); // simplified for clarity
    		var url = "innobbatus.000webhostapp.com/sendsors/insert.php";
    		httpc.open("POST", url, true); // sending as POST

    		httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    		httpc.setRequestHeader("Content-Length", params.length); // POST request MUST have a Content-Length header (as per HTTP/1.1)

    		httpc.onreadystatechange = function() { //Call a function when the state changes.
       	 	if(httpc.readyState == 4 && httpc.status == 200) { // complete and no errors
           		alert(httpc.responseText); // some processing here, or whatever you want to do with the response
        	}
    		};
    		httpc.send(params);
	}


	// cpf setup
	function setup(){
		if(cpf)
			cpf.setPinMode('["resetPin"],["setPinMode", "analog", 2, "INPUT"],["setPinMode", "analog", 1, "INPUT"],["setPinMode", "digital", 3,"INPUT"]');
		
	}
