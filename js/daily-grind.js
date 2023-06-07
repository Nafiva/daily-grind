/*Here are the main things we will likely need for each coffee:

name - the name of the coffee 
pic- the picture of the copy 
color - the color associated with the coffee 
alt - identify coffee
day- the day of the week 
desc- a description of the coffee 
*/


let myDate = new Date();

let today = myDate.getDay();


let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate query string parameters
const urlParams = new URLSearchParams(queryString);


function coffeeTemplate(coffee){
  
  return `
   <p>
    		 <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
  `;
  
}


if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

 today = parseInt(today);
switch(today){
//here I added different days of the week and changed colors, drinks descriptions for each day. 
    case 1:
          today = "Monday";
    
          coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            color: "purple",
            day: "Monday",
            desc: `I love me some bubble tea!`
        };
    
    break;

    case 2:
          today = "Tuesday";
          
          coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha",
            color: "brown",
            day: "Tuesday",
            desc: `I heart Chocolate!`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            name: "Cold Brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a cold brew",
            color: "black",
            day: "Wednesday",
            desc: `I hate me some cold brew!`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            name: "Pumpkin Spice Latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spice latte",
            color: "orange",
            day: "Thursday",
            desc: `Add some spice get a pumpkin!`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            name: "Caramel Latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            color: "darkgoldenrod",
            day: "Friday",
            desc: `I love the sweetness of caramel latte!`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            name: " Frappaccino",
            pic: "images/frappaccino.jpg",
            alt: "A picture of a frappacino",
            color: "blue",
            day: "Saturday",
            desc: `I love me a frappaccino!`
        };
    break;

    case 0:
        today = "Sunday";
        coffee = {
            name: " Drip Coffee ",
            pic: "images/drip.jpg",
            alt: "A picture of drip coffee",
            color: "yellow",
            day: "Sunday",
            desc: `Get a little drip drop!`
        };
    break;


    default:
        today = "Day is unknown";
}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee); 