import quotes from './quotes.js'

const favorites = JSON.parse(localStorage.getItem("favorites")) || [];


const actionBtn = document.querySelector('.generate-quote')
const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.quote-author')
const addToFavoritesButton = document.querySelector('.add-to-favorites')
const toggleThemeBtn = document.querySelector('.theme-toggle')
const body = document.body
const quoteCounter = document.querySelector('.quote-counter')
const progressBar = document.querySelector('.progress-bar')
let counter = 0
let progress = 0

if(localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme')
  toggleThemeBtn.textContent = '☀️'
}

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
    increaseProgress()
    increaseCounter()
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
toggleThemeBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme')

  if (body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
    toggleThemeBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    toggleThemeBtn.textContent = "🌙";
  }
})




function increaseProgress() {
  progress = Math.min(progress + 20, 100)
  progressBar.style.width = progress + '%'
}

// addToFavoritesButton.addEventListener('click', increaseProgress)
// addToFavoritesButton.addEventListener('click', increaseCounter)

function increaseCounter() {
  ++counter

  if (counter < 6) {
    quoteCounter.textContent = `${counter}/5`
  }
}
