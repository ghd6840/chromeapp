const quotes = [
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        auther: "Nelson Mandela"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        auther: "Helen Keller"
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        auther: "Thomas A. Edison"
    },
    {
        quote: "Love asks me no questions, and gives me endless support.",
        auther: "William Shakespeare"
    },
    {
        quote: "The supreme happiness in life is the conviction that we are loved.",
        auther: "Victor Hugo"
    },
    {
        quote: "Love doesn’t make the world go round. Love is what makes the ride worthwhile.",
        auther: "Franklin P. Jones"
    },
    {
        quote: "Success is going from failure to failure without a loss of enthusiasm.",
        auther: "Winston Churchill"
    },
    {
        quote: "Always bear in mind that your own resolution to succeed is more important than any other.",
        auther: "Abraham Lincoln"
    },
    {
        quote: "Try not to become a man of success but rather try to become a man of value.",
        auther: "Albert Einstein"
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        auther: "John D. Rockefeller"
    },
]

const quote = document.querySelector("#quote span:first-child");
const auther = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
auther.innerText = todayQuote.auther;