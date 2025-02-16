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

function removeQuoteFromfavorites(event) {
  const li = event.target.closest("li"); // Находим родительский элемент <li>
  if(!li) return

  const currentAuthor = li.querySelector('.favorite-author').textContent.replace(/"/g, "");

  const index = favorites.findIndex((obj) => obj.author === currentAuthor)

  if(index !== -1) {
    favorites.splice(index, 1)
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateUI()
}

function updateUI () {
  const favoritesList = document.querySelector('.favorites-list')
  favoritesList.innerHTML = "";

  favorites.forEach((element) => {
    const li = document.createElement('li')
    li.classList.add('favorite-item')

    const quoteText = document.createElement('p')
    quoteText.classList.add('favorite-quote')
    quoteText.textContent = `"${element.quote}"`
    
    const quoteAuthor = document.createElement('p')
    quoteAuthor.classList.add('favorite-author')
    quoteAuthor.textContent = `"${element.author}"`

    const removeButton = document.createElement('button')
    removeButton.classList.add('favorite-item__remove-btn')
    removeButton.textContent = '✗'

    removeButton.addEventListener('click', removeQuoteFromfavorites)

    li.appendChild(quoteText)
    li.appendChild(quoteAuthor)
    li.appendChild(removeButton)

    favoritesList.appendChild(li)
  })
}

actionBtn.addEventListener('click', getRandomQuote)
addToFavoritesButton.addEventListener('click', addQuoteToFavorites)


