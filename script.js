import quotes from './quotes.js'

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];


const actionBtn = document.querySelector('.generate-quote')
const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.quote-author')
const addToFavoritesButton = document.querySelector('.add-to-favorites')

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const {quote, author} = quotes[randomIndex]
  quoteText.textContent = quote
  quoteAuthor.textContent = author
}

function addQuoteToFavorites() {
  const currentQuoteText = quoteText.textContent
  const currentAuthor = quoteAuthor.textContent
  const newFavoriteQuote = {quote: currentQuoteText, author: currentAuthor}
  
  if (!favorites.some(obj => obj.quote === newFavoriteQuote.quote && obj.author === newFavoriteQuote.author)) {
    favorites.push(newFavoriteQuote);

  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateUI()
}
}

function updateUI () {
  const favoritesList = document.querySelector('.favorites-list')
  favoritesList.innerHTML = "";

  favorites.forEach((element, index) => {
    const li = document.createElement('li')
    li.classList.add('favorite-item')

    const quoteText = document.createElement('p')
    quoteText.classList.add('favorite-quote')
    quoteText.textContent = `"${element.quote}"`
    
    const quoteAuthor = document.createElement('p')
    quoteAuthor.classList.add('favorite-author')
    quoteAuthor.textContent = `"${element.author}"`


    li.appendChild(quoteText)
    li.appendChild(quoteAuthor)

    favoritesList.appendChild(li)
  })
}

actionBtn.addEventListener('click', getRandomQuote)
addToFavoritesButton.addEventListener('click', addQuoteToFavorites)

