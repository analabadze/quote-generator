let apiQuotes = [];

function newQuote() {
  const random = Math.floor(Math.random());
  const quote = apiQuotes[random * apiQuotes.length];
  console.log(quote);
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

getQuotes();
