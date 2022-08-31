const quote = ['Fortune favors the bold', 'I think, therefore I am', 'Time is money', 'I came, I saw, I conquered', 'Life would be tragic if it weren’t funny', 'There’s a sucker born every minute']
const author = ['Virgil', 'René Descartes', 'Benjamin Franklin', 'Julius Caesar', 'Stephen Hawking', 'P.T. Barnum']
const disclaimer = ['maybe', 'probably', 'I think', 'or something', '... yeah, definitely']

function mixedMessage(){
    let randQuote = quote[Math.floor(Math.random()*quote.length)]
    let ranAuthor = author[Math.floor(Math.random()*author.length)]
    let randDisclaimer = disclaimer[Math.floor(Math.random()*disclaimer.length)]
    return `"${randQuote}." - ${ranAuthor} ${randDisclaimer}`
}