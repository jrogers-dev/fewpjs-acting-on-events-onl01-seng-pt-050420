// Your code here
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    
  } 
  else if (e.key === "ArrowRight") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left + 40 < 400) dodger.style.left = `${left + 2}px`;
  }
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) { dodger.style.left = `${left - 2}px`;}
}

function moveDodgerRight() {
  
}