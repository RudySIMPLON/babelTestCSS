"use strict";

var tabs = [];
console.log("jojo");

var text = document.getElementById("btn");
var Rechercher = document.getElementById("rechercher");

text.addEventListener('click', function (event) {

	var recup = document.getElementById('search').value;
	var ul = document.getElementById("spanid");
	var li = document.createElement("li");
	ul.appendChild(li);
	tabs.push(recup);
	// console.log(tabs)
	// console.log(recup)


	if (recup === "") {
		document.getElementById("spanid").innerHTML = "Pere noel";
	} else {
		li.innerHTML = recup;

		Rechercher.addEventListener('click', function (event) {

			var recupRecherche = document.getElementById('research').value;
			// console.log(tabs)


			for (var i = 0; i < tabs.length; i++) {
				// console.log(i);
				var ind = tabs[i].indexOf(recupRecherche);
				if (ind === 0) {
					document.getElementById("spanid").innerHTML = tabs[i];

					console.log(tabs[i]);
				}
			}
		});
	}
});
