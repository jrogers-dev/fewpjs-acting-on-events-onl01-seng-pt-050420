// Your code here
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
 
    if (left > 0) { dodger.style.left = `${left - 2}px`;}
  } 
  else if (e.key === "ArrowRight") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let rightNumbers = dodger.style.right.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    let right = parseInt(rightNumbers, 10);
    
    if (right < 400) dodger.style.left = `${left + 2}px`;
  }
});

