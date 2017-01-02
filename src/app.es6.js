let tabs = [];
console.log("jojo")

let text = document.getElementById("btn");
let Rechercher = document.getElementById("rechercher");

text.addEventListener('click', (event)=> {

	let recup = document.getElementById('search').value;
	let ul= document.getElementById("spanid");
	let li = document.createElement("li");
	ul.appendChild(li);
	tabs.push(recup);
	// console.log(tabs)
	// console.log(recup)


	if (recup ===""){ 
		document.getElementById("spanid").innerHTML="Pere noel"
	}

	else {
		li.innerHTML = recup;

		Rechercher.addEventListener('click', (event)=>{

			let recupRecherche =document.getElementById('research').value;
			// console.log(tabs)


			for(let i = 0; i<tabs.length ; i++){
				// console.log(i);
	let ind = tabs[i].indexOf(recupRecherche);
	if(ind===0){ document.getElementById("hello").innerHTML=tabs[i];


		console.log(tabs[i]);
			}
	}

	})
	}  
})


























