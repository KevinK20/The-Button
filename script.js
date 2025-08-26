// all the JS was made by ChatGPT coz idk how too


let count = Number(localStorage.getItem("clicks")) || 0;
document.getElementById("Click").innerText = count;


document.getElementById("button").addEventListener("click", () => {
  count++;
  document.getElementById("Click").innerText = count;
  localStorage.setItem("clicks", count); 
});


document.getElementById("reset").addEventListener("click", () => {
  let confirmReset = confirm("Are you sure you want to reset the Clicks?, If you click 'ok' your clicks will reset back to 0 ");
  if (confirmReset) {
    localStorage.removeItem("clicks"); 
    count = 0;                         
    document.getElementById("Click").innerText = count; 
  }
});
