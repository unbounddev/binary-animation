const lights = document.querySelectorAll("#images>img");
const numText = document.getElementById("num");
let num = 0;
const LIGHT_ON = "/light_on.png";
const LIGHT_OFF = "/light_off.png";

setInterval(() => {
  // increment number
  num += 1;
  // reset number if greater than 255
  if (num >= 2**8){
    num = 0;
  }
  // set number text
  numText.innerText = num;

  // check each bit of the current number and set light accordingly
  for(let i = 0; i < lights.length; i++){
    lights[i].src = (num & (1 << lights.length-1-i)) ? LIGHT_ON : LIGHT_OFF;
  }
}, 1000)