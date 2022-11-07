const url = `https://api.thecatapi.com/v1/breeds`;
const api_key = "live_JAzxl3p0eA0ecShr3VGlmn6lsNcMNxdgKxkb0nyewNTuy7lO0L1Er2wTAlCjWa4r"
const spinner = document.querySelector('#js-spinner');
let storedBreeds = []

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
   
   //filter to only include those with an `image` object
   data = data.filter(img=> img.image?.url!=null)
   
  storedBreeds = data;
   
   for (let i = 0; i < storedBreeds.length; i++) {
    const breed = storedBreeds[i];
    let option = document.createElement('option');
     
     //skip any breeds that don't have an image
     if(!breed.image)continue
     
    //use the current array index
    option.value = i;
    option.innerHTML = `${breed.name}`;
document.getElementById('breed_selector').appendChild(option);
    
    }
   //show the first breed by default
   showBreedImage(0)
})
.catch(function(error) {
   console.log(error);
});

function showBreedImage(index)
{ 
  document.getElementById("breed_image").src= storedBreeds[index].image.url;
  
  document.getElementById("breed_json").textContent= storedBreeds[index].temperament
  
  
  document.getElementById("wiki_link").href= storedBreeds[index].wikipedia_url
  document.getElementById("wiki_link").innerHTML= storedBreeds[index].wikipedia_url
}




// //adding new variable for new quote button
// const newQuote = document.querySelector('#js-new-quote');
// //add variable for the api endpoint
// const endpoint = 'https://api.thecatapi.com/v1/images/search';

// //creating event listener to know when the button is clicked
//     newQuote.addEventListener('click', getQuote); 

// //getQuote function
// async function getQuote() {
//     try {
//         const response = await fetch(endpoint)
//         if (!response.ok) {
//           throw Error(response.statusText)
//         }
//         const json = await response.json();
//         // console.log(json);
//         displayQuote(json.message);
//       } 
//       catch (err) {
//         console.log(err)
//         alert('Failed to fetch new quote');
//       }
// }

// //display quote function
// function displayQuote(quote) {
//     const quoteText = document.querySelector('#js-quote-text');
//     quoteText.textContent = quote;
//   }

