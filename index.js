// Your code here
document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
 
    dodger.style.left = `${left - 2}px`;
  } 
  else if (e.key === "ArrowRight") {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    dodger.style.left = `${left + 2}px`;
  }
});

