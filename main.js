let button = document.querySelector(".button");
let color = "white";

function enableDarkMode(){
color="black";
document.querySelector("body").style.backgroundColor="black";
document.querySelector("#mar").style.backgroundColor="orange";
document.querySelector(".footer").style.backgroundColor="black";
document.querySelector(".button").innerHTML="Light Mode";
document.querySelector(".horizontal-line").style.backgroundColor="white";
localStorage.setItem("colorMode", "dark");
}
function disableDarkMode(){
  color="white";
  document.querySelector("body").style.backgroundColor="white";
  document.querySelector(".button").innerHTML="Dark Mode";
  document.querySelector("#mar").style.backgroundColor="white";
  document.querySelector(".footer").style.backgroundColor="#343a40";
  document.querySelector(".horizontal-line").style.backgroundColor="black";
  localStorage.setItem("colorMode", "light");
  }

  if(localStorage.getItem("colorMode")==="dark"){
    enableDarkMode();
  }

  button.addEventListener("click", function(e){
    e.preventDefault();
    if(color==="white"){
      if(confirm("Activate Dark Mode")){
        enableDarkMode();
      }
    }
    else{
      if(confirm("Activate Light Mode")){
        disableDarkMode();
      }
    }
  });

  document.getElementById('hamburger').addEventListener('click', function() {
    var dropdown = document.getElementById('dropdown');
    if (dropdown.style.display === 'flex') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'flex';
    }
});

const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('close');
const dropdown = document.getElementById('dropdown');
const header1 = document.querySelector('.heading-links');

function checkWindowSize() {
    if (window.innerWidth > 1000) {
        dropdown.classList.remove('open');
        dropdown.style.display = 'none';
        hamburger.style.display = 'none';
        closeBtn.style.display = 'none';
        header1.style.display = 'flex';
    } else {
        hamburger.style.display = 'block';
        header1.style.display = 'none';
    }
}

hamburger.addEventListener('click', function() {
    dropdown.classList.add('open');
    dropdown.style.display = 'flex';
    hamburger.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    dropdown.classList.remove('open');
    dropdown.style.display = 'none';
    hamburger.style.display = 'block';
    closeBtn.style.display = 'none';
});

window.addEventListener('resize', checkWindowSize);
window.addEventListener('load', checkWindowSize);

