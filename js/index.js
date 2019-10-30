// In Git Hell!


// 1-mouseover

//"FUN BUS" logo turns red
document.getElementsByClassName("logo-heading")[0].onmouseover = function() { 
  this.style.color = "red";
};


//  turns nav bar blue and nav text white

const $mainNav = document.querySelector('.nav');
$mainNav.addEventListener("mouseover", event =>{
    event.target.style.color = "white";
    event.target.style.backgroundColor = "skyblue";
    setTimeout(() => {
        event.target.style.color ="";
        event.target.style.backgroundColor = "";
    },500);
},false);


//   mouse-enter   Turns FUN BUS img inverted

 const imgGrab = document.querySelector("img");


imgGrab.addEventListener("mouseenter", () => {
    imgGrab.style.filter = "invert(100%)";
  })

  const bodyImageOne = document.querySelector(".img-content");
console.log(bodyImageOne);

bodyImageOne.addEventListener("mouseenter", () => {
    bodyImageOne.style.transform = "scale(1.2)";
    bodyImageOne.style.transition = "all 0.3s"
})
bodyImageOne.addEventListener("mouseleave", () => {
    bodyImageOne.style.transform = "scale(1.0)";
    bodyImageOne.style.transition = "all 0.3s"
})






// 2  -keydown

// turns the background color to random colors on key down

document.addEventListener('keydown', logKey);
function logKey(e) {
  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();
}



//  enlarges 1st photo on right and allows to go back to natural state

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  scale = Math.min(Math.max(.125, scale), 4);

  el.style.transform = `scale(${scale})`;
console.log=("event")}

let scale = 1;
const el = document.querySelector('img');


//load  loads a random color upon opening the browser everytime.


window.addEventListener('load', (event) => {
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color();
});






//  3  -wheel uses wheel event to turn the "welcome to fun bus" green  (dbl click and roll wheel on mouse)


let h2Pointer = document.querySelector(".intro h2")

h2Pointer.addEventListener('wheel', function(){
  h2Pointer.style.color = '#8cc53b';
})







// 4  -drag / drop  (for some reason will not work in my browser but works in others!)

// var dragged;

// document.addEventListener("drag", function(event) {

// }, false);

// document.addEventListener("dragstart", function(event) {

//   dragged = event.target;
//   event.target.style.opacity = .5;
// }, false);

// document.addEventListener("dragend", function(event) {
//   event.target.style.opacity = "";
// }, false);

// document.addEventListener("dragover", function(event) {
//   event.preventDefault();
// }, false);

// document.addEventListener("dragenter", function(event) {
// if (event.target.className == "img-content") {
//     event.target.style.background = "purple";
//   }

// }, false);

// document.addEventListener("dragleave", function(event) {
// if (event.target.className == "img-content") {
//     event.target.style.background = "";
//   }

// }, false);

// document.addEventListener("drop", function(event) {
// event.preventDefault();
//   if (event.target.className == "img-content") {
//     event.target.style.background = "";
//     dragged.parentNode.removeChild( dragged );
//     event.target.appendChild( dragged );
//   }
// }, false);





// 5-load   Copy Notifier - will notify you with a pop up if you try to copy any of the paragraphs 


const copy = document.querySelector('p');

copy.addEventListener('copy', (e) => {
    window.alert("Hey! Don't copy me, that's stealing ya know!");
  });



  window.onload =() =>{
    setTimeout(() =>{
        alert('Welcome to FunBus, Enjoy your stay!');
    },3000); 
};



// 6-focus






// 7-resize 

// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');

// function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }

// window.onresize = reportWindowSize;

// //select
// function logSelection(event) {
//     const log = document.getElementById('log');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `${selection}`;
//   }
  
//   const input = document.querySelector('input');
//   input.addEventListener('select', logSelection);

// //dblClick
// const card = document.querySelector('img');

// card.addEventListener('dblclick', function (e) {
//   card.classList.toggle('large');
// });

// //stop nav
// const stopLink = document.querySelector(".nav");

// stopLink.addEventListener("click", (event) => {
//   console.log("stopped link");
  
//   event.preventDefault();
// })





// text size jumps on resize


//const introText = document.querySelectorAll('.intro p')[0];
// window.addEventListener('resize', function(){
//     introText.style = 'font-size: 40px';
 //})




// 8-scroll  -  p text (middle section) goes aqua on scroll


const text1 = document.querySelectorAll('.content-section p')[0];
const text2 = document.querySelectorAll('.content-section p')[1];
const text3 = document.querySelectorAll('.content-section p')[2];
const text4 = document.querySelectorAll('.content-section p')[3];
const text5 = document.querySelectorAll('.content-section p')[4];
const text6 = document.querySelectorAll('.content-destination p')[0];


 window.addEventListener('keydown', function(){
     text1.style = 'color: aqua';
 });

 window.addEventListener('keydown', function(){
    text2.style = 'color: aqua';
});

window.addEventListener('keydown', function(){
    text3.style = 'color: aqua';
});

window.addEventListener('keydown', function(){
    text4.style = 'color: aqua';
});

window.addEventListener('keydown', function(){
    text5.style = 'color: aqua';
});

window.addEventListener('keydown', function(){
    text6.style = 'color: aqua';
});





// 9-select



// Prevent nav links from refreshing page
const stopNavLinks = document.querySelectorAll('nav a');
stopNavLinks.forEach( element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
  })
})



// 10-dblclick on "Welcome"

const container = document.querySelectorAll('.container');
const containerKeydownFunction = function() {
    document.body.style.backgroundColor = "purple";
}

container.forEach(function(element) {
    element.addEventListener('dblclick', containerKeydownFunction);
})