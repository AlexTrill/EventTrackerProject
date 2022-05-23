window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
	getAllOpenings();

});


function init() {
	document.openingForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		let openingId = document.openingForm.openingId.value;
		if (!isNaN(openingId) && openingId > 0) {
			getFilm(openingId);



		}
	});
	
	document.deleteOpening.deleteBtn.addEventListener('click', (e) => {
		e.preventDefault();
		deleteOpening(document.deleteOpening.id.value);
		getAllOpenings();
	});
  
	document.createOpeningForm.submit.addEventListener('click', (e) => {
		e.preventDefault();
		createOpening(e)
		getAllOpenings();
	});
}


function createOpening(e) {
	e.preventDefault();

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/openings', true);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status == 200 || xhr.status == 201) { // Ok or Created
				let data = JSON.parse(xhr.responseText);
				displayOpening(data);
			}
			else {
				console.error("POST request failed.");
				console.error(xhr.status + ': ' + xhr.responseText);
			}
		}

	};
	let opening = {
		name: document.createOpeningForm.name.value,
		pieceColor: document.createOpeningForm.pieceColor.value,
		tutorialLink: document.createOpeningForm.tutorialLink.value,
		type: document.createOpeningForm.type.value,
		imageUrl: document.createOpeningForm.imageUrl.value
		



	};
	xhr.send(JSON.stringify(opening));
}



function getFilm(openingId) {
	// TODO:
	// * Use XMLHttpRequest to perform a GET request to "api/films/"
	//   with the filmId appended.
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/openings/' + openingId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				// * On success, if a response was received parse the film data
				//   and pass the film object to displayFilm().
				let opening = JSON.parse(xhr.responseText);
				console.log(opening);
				displayOpening(opening);
			}
			else {
				// * On failure, or if no response text was received, put "Film not found" 
				//   in the filmData div.
				console.log('Opening not found.')
			}
		}
	};

	xhr.send();
}



function displayOpening(opening) {
	let dataDiv = document.getElementById('openingData');
	dataDiv.textContent = '';

	let h1 = document.createElement('h1');
	h1.textContent = opening.name;
	dataDiv.appendChild(h1);

let ul = document.createElement('ul');
	let pieceColor = document.createElement('li');
	let tutorialLink = document.createElement('a');
	let type = document.createElement('li');
	let imageUrl = document.createElement('img');
	let common = document.createElement('li');

	pieceColor.textContent = "Piece Color: " + opening.pieceColor;
	tutorialLink.textContent = "Tutorial Link: " + opening.tutorialLink;
	tutorialLink.setAttribute('href',opening.tutorialLink);
	
	type.textContent = "Type: " + opening.type;
	imageUrl.textContent = opening.imageUrl;
	
	imageUrl.setAttribute("src", opening.imageUrl);
    imageUrl.setAttribute("height", "300");
	imageUrl.setAttribute("width", "300");
	
	
	common.textContent = "Is common? " + opening.common;
	if(imageUrl !== null){
	ul.appendChild(imageUrl);
	}
	ul.appendChild(pieceColor);
	ul.appendChild(type);
	ul.appendChild(common);
    if(tutorialLink !== null) {
	ul.appendChild(tutorialLink);
	}
	dataDiv.appendChild(ul);

	document.updateOpening.updateBtn.addEventListener('click', function(event) {
		event.preventDefault();
		updateOpening(opening)
		getAllOpenings();
		
	
	});

	


}
function updateOpening(opening) {

	
	console.log("in update");

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/opening/' + opening.id);

	xhr.setRequestHeader("Content-type", "application/json"); // Specify JSON request body

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status < 400) {
				// * On success, if a response was received parse the opening data
				//   and pass the object to displayOpening().
				let opening = JSON.parse(xhr.responseText);
				console.log(opening);
				displayOpening(opening);
			}
			else {
				// * On failure, or if no response text was received, put "opening not found" 
				//   in the filmData div.
				console.log('Opening not updated.')
			}
		}
		};
		
		let newOpening = {
			id: document.updateOpening.id.value,
			name: document.updateOpening.name.value,
			pieceColor: document.updateOpening.pieceColor.value,
			tutorialLink: document.updateOpening.tutorialLink.value,
			type: document.updateOpening.type.value,
			imageUrl: document.updateOpening.imageUrl.value,
			common: document.updateOpening.common.value,
		   
			
		}
		xhr.send(JSON.stringify(newOpening));
	}
	
	function deleteOpening(id) {
	let xhr = new XMLHttpRequest();
	

	xhr.open('DELETE', 'api/openings/' + id, true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				console.log('Deleted');
			} else {
				console.log('Delete failed');
			}
		}
	};

	xhr.send();

}
function getAllOpenings() { 
	let xhr = new XMLHttpRequest();

	xhr.open('GET', 'api/index', true);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let openings = JSON.parse(xhr.responseText);
				openingsByColor(openings);
			} else {
				console.log('No openings found');
			}
		}
	};

	xhr.send();
}
function openingsByColor(openings) {
		let openingColorData = document.getElementById('openingColorData');
		openingColorData.textContent = '';
		
		
let white =0;
let black = 0;

	for (let i = 0; i < openings.length; i++) {
	
if(openings[i].pieceColor === "White"){
	 white++;
} else{
	if(openings[i].pieceColor === "Black"){
	 black++;
	
}
	}
	
}
	let header = document.createElement('p');
	openingColorData.appendChild(header);
	
	header.textContent = "Number of openings for the white pieces currently in the database: " + white
	
	let header2 = document.createElement('p');
	openingColorData.appendChild(header2);
	
	header2.textContent = "Number of openings for the black pieces currently in the database: " + black
	
}
	