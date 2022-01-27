

function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();
  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const mario = document.querySelector('#avatar');
const coin = document.querySelector('#coin');

const body = document.querySelector('body');
const setScore = document.createElement('h1');
let score = 0;
body.insertBefore(setScore,mario)

let x = 100;
let y = 100;

// move mario
const moveAvatar = function(e) {

  let key_code = event.keyCode;
  
  if (key_code === 37) {
    console.log('go left');
    y -= 50;
    mario.style.left = y + 'px';
  }else if (key_code === 38) {
    console.log('go top');
    x -= 50;
    mario.style.top = x + 'px';
  }else if (key_code === 39){
    console.log('go right');
    y += 50;
    mario.style.left = y + 'px';
  }else if(key_code === 40){
    console.log('go down');
    x += 50;
    mario.style.top = x + 'px';
  }



// if coin touch
  if (isTouching(mario, coin)) {
    const height = Math.floor(Math.random() * (window.innerHeight - 100))
    const width = Math.floor(Math.random() * (window.innerWidth - 100))

    coin.style.left = `${width}px`
    coin.style.top = `${height}px`

    score += 1;
    console.log(score);
    setScore.innerText = `Score : ${score}`

  }
};

document.addEventListener("keydown", moveAvatar);
