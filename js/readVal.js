	import dht.h	
	DHT dht(3, DHT11);

	setup();
	
	var tempValue;
	var smokeValue;
	var smokeValue1;
	var noiseValue;
	var noiseValue1;
	var noiseValue2;

	loop();

	function loop() {
		if (cpf) {
			tempValue = dht.readTemperature();
			document.getElementById("tempValue").innerHTML = tempValue;
			smokeValue = cpf.get("a2");	
			smokeValue1 = (1023 - smokeValue) / 26;
			document.getElementById("smokeValue").innerHTML = smokeValue1;
			noiseValue = cpf.get("a1");
			noiseValue1 = (noiseValue * 5) / 1023;
			noiseValue2 = (noiseValue1 * 32);
			document.getElementById("noiseValue").innerHTML = noiseValue2;
		}
		if (tempValue != null && smokeValue != null && noiseValue != null) {
			var URL = "innobbatus.000webhostapp.com/sendsors/insert.php?temp=" + tempValue + "&smk=" + smokeValue + "&noise=" + noiseValue;
			xmlhttp.open("GET",URL,true);
		}
		setTimeout("loop()", 1000);
	}
	


	// cpf setup
	function setup(){
		if(cpf)
			cpf.setPinMode('["resetPin"],["setPinMode", "analog", 2, "INPUT"],["setPinMode", "analog", 1, "INPUT"],["setPinMode", "digital", 3,"INPUT"]');
		
	}
