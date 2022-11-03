//adding new variable for new quote button
const newQuote = document.querySelector('#js-new-quote');
//add variable for the api endpoint
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

//creating event listener to know when the button is clicked
    newQuote.addEventListener('click', getQuote); 

//getQuote function
async function getQuote() {
    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
          throw Error(response.statusText)
        }
        const json = await response.json();
        // console.log(json);
        displayQuote(json.message);
      } 
      catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
      }
}

//display quote function
function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
  }

