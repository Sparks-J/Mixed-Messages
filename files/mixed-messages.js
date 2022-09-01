const quote = [
    'Fortune favors the bold',
    'I think, therefore I am',
    'Time is money',
    'I came, I saw, I conquered',
    "Life would be tragic if it weren't funny",
    "There's a sucker born every minute",
    'In the middle of difficulty lies opportunity',
    'The best way out is always through',
    'I am, therefore I think']
const author = [
    'Virgil',
    'René Descartes',
    'Benjamin Franklin',
    'Julius Caesar',
    'Stephen Hawking',
    'P.T. Barnum',
    'Albert Einstein',
    'Robert Frost', 
    'Ayn Rand']
const disclaimer = [
    'maybe',
    'probably',
    'I think',
    'or was it someone else?',
    'yeah, definitely']

function mixedMessage(){
    let randQuote = quote[Math.floor(Math.random()*quote.length)]
    let ranAuthor = author[Math.floor(Math.random()*author.length)]
    let randDisclaimer = disclaimer[Math.floor(Math.random()*disclaimer.length)]
    document.getElementById('message').innerHTML = `"${randQuote}."`
    document.getElementById('author').innerHTML = `- ${ranAuthor}... ${randDisclaimer}`
}