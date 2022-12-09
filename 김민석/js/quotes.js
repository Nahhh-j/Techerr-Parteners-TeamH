const quotes=[
  {
    quote:
    "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelo"
  },
  {
    quote:
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela"
  },
  {
    quote:
    "In the end, it's not the years in your life that count. It's the life in your years. ",
    author:"Abraham Lincoln"
  },
  {
    quote:
    "Never let the fear of striking out keep you from playing the game.",
    author:" Babe Ruth"
  },
  {
    quote:
    "Life is either a daring adventure or nothing at all.",
    author:"Helen Keller"
  },
  {
    quote:
    "Many of life's failures are people who did not realize how close they were to success when they gave up. ",
    author:"Thomas A. Edison"
  },
  {
    quote:
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. ",
    author:"Dr. Seuss"
  },
  {
    quote:
    "I believe we are here on the planet Earth to live, grow up and do what we can to make this world a better place for all people to enjoy freedom.  ",
    author:"Rosa Parks"
  },
  {
    quote:
    "Being happy never goes out of style. ",
    author:"Lilly Pulitzer"
  },
  {
    quote:
    "Life is either a great adventure or nothing. ",
    author:"Helen Keller"
  },
  {
    quote:
    "You are the sum total of everything you've ever seen, heard, eaten, smelled, been told, forgot --  it's all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive. ",
    author:"Maya Angelou"
  }
  
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes=quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText= todaysQuotes.quote;
author.innerText= todaysQuotes.author;