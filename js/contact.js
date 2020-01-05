function validateForm() {
		var n = document.forms["forma"]["name"].value;
		if (n == "") {
			alert("Plotesoni hapesiren e emrit");
		return false;
		}
				
				var e = document.forms["forma"]["email"].value;
				if (e == "") {
					alert("Plotesoni hapesiren tek email");
				return false;
				}
			}
			
			
			function styleBtnDate() {
				document.getElementById("btnDate").style.color = "blue";
				document.getElementById("btnDate").style.backgroundColor = "white";
				document.getElementById("btnDate").style.font = "italic bold 18px arial serif";
			}
			