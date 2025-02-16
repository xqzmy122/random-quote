const quotes = [
  { 
    quote: "Будьте изменением, которое хотите видеть в мире.",
    author: "Махатма Ганди"
   },
  { 
    quote: "Жизнь — это то, что с тобой происходит, пока ты строишь другие планы.",
    author: "Джон Леннон" 
  },
  { 
    quote: "Только две вещи бесконечны: вселенная и человеческая глупость, хотя насчет первой я не уверен.", 
    author: "Альберт Эйнштейн" 
  },
  { 
    quote: "Наше величайшее заблуждение — это страх перед неудачами.", 
    author: "Наполеон Бонапарт" 
  },
  { 
    quote: "Если хочешь иметь то, что никогда не имел, придется делать то, что никогда не делал.", 
    author: "Томас Джефферсон" 
  },
  { 
    quote: "Критика — это не то, что заставляет нас двигаться вперед, а вдохновение.", 
    author: "Уинстон Черчилль" 
  },
  { 
    quote: "Счастье — это не нечто готовое. Оно исходит из твоих собственных действий.", 
    author: "Далай-лама" 
  },
  { 
    quote: "Я не терпел поражений. Я просто нашел 10 000 способов, которые не работают.", 
    author: "Томас Эдисон" 
  },
  { 
    quote: "Учись вчера, живи сегодня, надейся на завтра.", 
    author: "Альберт Эйнштейн" 
  },
  { 
    quote: "Не тот велик, кто никогда не падал, а тот велик — кто падал и вставал.", 
    author: "Конфуций" 
  }
];

console.log(quotes);


const actionBtn = document.querySelector('.quote-btn')
const quoteText = document.querySelector('.quote-text')
const quoteAuthor = document.querySelector('.quote-author')

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const {quote, author} = quotes[randomIndex]
  quoteText.textContent = quote
  quoteAuthor.textContent = author
}

actionBtn.addEventListener('click', getRandomQuote)

