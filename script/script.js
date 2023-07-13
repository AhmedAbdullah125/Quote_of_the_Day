var btn = document.getElementById("btn");
var quote = document.getElementById("quote");
var author = document.getElementById("author");

var quotes = [
    {
        author: 'Jim Rohn',
        quote: 'Beware of what you become in pursuit of what you want.'
    },
    {
        author: 'Frank Sinatra',
        quote: 'The best revenge is massive success.'
    },
    {
        author: 'Elbert Hubbard',
        quote: 'Do not take life too seriously. You will not get out alive.'
    },
    {
        author: 'Wayne Gretzy',
        quote: 'You miss 100% of the shots you don\'t take.'
    },
    {
        author: 'Epictetus',
        quote: 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        author: 'Nelson Mandela',
        quote: 'Resentment is like drinking poison and waiting for your enemies to die.'
    }

];
btn.onclick = function () {
    var randm = Math.floor(Math.random() * quotes.length);
    console.log(randm);
    quote.innerHTML = `\"${quotes[randm].quote}\"`;
    author.innerHTML = quotes[randm].author;
}