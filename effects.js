// declaring variables

const ef4 = document.getElementById('ef4');
const ef13 = document.getElementById('ef13');
const ef14 = document.getElementById('ef14');
const ef3 = document.getElementById('ef3');
const ef5 = document.getElementById('ef5');
const ef1 = document.getElementById('ef1');
const ef2 = document.getElementById('ef2');
ef2.addEventListener('click', () => {
    let start = Date.now();

    setInterval(() => {
        let int = Date.now() - start;
        ef2.style.rotate = `${int/5}deg`;
        if (int >= 10000) {

            ef2.style.rotate = '0deg'
            return;
          }
    }, 20)
  
})
ef3.addEventListener('mouseenter', (e) => {


 
    e.target.style.transform = 'scale(-1,1)'
   
   
})
ef3.addEventListener('mouseout', (e) => {
    e.target.style.transform = 'scale(1,1)'
    
   
   
})
ef4.addEventListener('mouseenter', (e) => {
    let opacity = 20;

   
   
  
    setInterval(function ik() {
        if(opacity > 50){
            e.target.style.opacity = `${opacity}%`
            opacity = Math.ceil(Math.random()*100);
        } else {
            e.target.style.opacity = `${opacity}%`
            opacity = Math.ceil(Math.random()*100);
        }
    },1000);
    
})
function randColor(elem) {
    
                var element = document.getElementById(elem),
                    
                    r = Math.floor(Math.random() * (256)),
                    g = Math.floor(Math.random() * (256)),
                    b = Math.floor(Math.random() * (256)),

                    color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
    
                element.style.backgroundColor = color;
           
            }
ef5.addEventListener('click',() => {
    randColor(ef5.id);
})


ef1.addEventListener('click', () => {
    let start = Date.now();
    ef1.style.position = 'absolute';
    setInterval(() => {
        let int = Date.now() - start;
        ef1.style.right = `${int/5}px`;
        if (int >= 10000) {
            ef1.style.position = 'initial'
            return;
          }
    }, 20)
  
})
ef13.addEventListener('click', (e) => {
    if(ef13.style.filter === 'grayscale(100%)'){
        ef13.style.filter = 'grayscale(0%)'
    }else {
        ef13.style.filter = 'grayscale(100%)'
    }
  
})
let counter = 0;
ef14.addEventListener('click', (e) => {
    counter++;

    if(counter === 10){
        alert('Молодец! Иди уроки делай.')
        counter = 0;
    }
  
})

const btnAlert = document.getElementById('btn');
btnAlert.addEventListener('click', () => {
    alert('Вот оно!')
})
const btnClick = document.getElementById('btnClick');

btnClick.addEventListener('click', (e) => {
    console.log(e.target.innerText)
    const points = ['Я','люблю','свою','маму']
    let currentIndex = points.indexOf(e.target.innerText);
    console.log(currentIndex)
    e.target.innerText = points[currentIndex+1] ?? points[0];
})
var typeText = document.querySelector(".typeText")
var textToBeTyped = "лучшая игра для детей в мире!!!"
var index = 0, isAdding = true
function playAnim() {
    setTimeout(function () {
      typeText.innerText = textToBeTyped.slice(0, index)
      if (isAdding) {
        if (index > textToBeTyped.length) {
          isAdding = false
          setTimeout(function () {
            playAnim()
          }, 2000)
          return
        } else {
          index++
        }
      } else {
        if (index === 0) {
          isAdding = true
        } else {
          index--
        }
      }
      // call itself
      playAnim()
    }, 120)
  }
  // start animation
  playAnim()
  