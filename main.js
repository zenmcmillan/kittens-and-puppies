var button = document.querySelector('button');
var title = document.querySelector('h1');
var animalFact = document.querySelector('#animalFact');
var imageLabel = document.querySelector('#imageLabel');
var image = document.querySelector('img');
var posterSection = document.querySelector('section');

var savedPosters = []

var currentPoster;

window.addEventListener('load', function() {
  makeOriginalPoster()
  renderPuppiesPoster()
});

button.addEventListener('click', function() {
  if (currentPoster.title === savedPosters[0].title) {
    makeKittensPoster()
    renderKittensPoster()
  } else {
    makeOriginalPoster()
    renderPuppiesPoster()
  }	
});

function createPosterObject(title, animalFact, imageLabel, image, alt) {
	return { title: title, animalFact: animalFact, imageLabel: imageLabel, image: image, alt: alt
	}
}
//It starts here with the creation of the poster object

function makeOriginalPoster() {
  currentPoster = createPosterObject(title.innerText, animalFact.innerText, imageLabel.innerText, image.src, image.alt)
  savedPosters.push(currentPoster)
}
// OnPage Load this will take the original HTML information for the poster and make that data an object of currentPetPoster. Data Model 


function makeKittensPoster() {
	currentPoster = createPosterObject('kittens', 'Kittens are so cute', 'Here is a pic of some kities:', 'https://icatcare.org/app/uploads/2018/07/Finding-homes-for-your-kittens-1.png', 'basket of kittens')
  savedPosters.push(currentPoster)
}

function renderPuppiesPoster() {
  posterSection.innerHTML = '';

      posterSection.innerHTML += `
        <section class="gray">
    	    <h1 class="title">${savedPosters[0].title}</h1>
          <p id="animalFact">${savedPosters[0].animalFact}</p>
	        <p id="imageLabel">${savedPosters[0].imageLabel}</p>
	        <img src="${savedPosters[0].image}" alt="${savedPosters[0].alt}">
        </section>`
       }

function renderKittensPoster() {

  posterSection.innerHTML = '';

      posterSection.innerHTML += `
        <section class="kitten-box">
          <section>
    	      <h1 class="kitten-heading">${savedPosters[1].title}</h1>
            <p id="animalFact">${savedPosters[1].animalFact}</p>
	          <p id="imageLabel">${savedPosters[1].imageLabel}</p>
	          <img src="${savedPosters[1].image}" alt="${savedPosters[1].alt}">
          </section>
        </section>`
      }

      
  

  
