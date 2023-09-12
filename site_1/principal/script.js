
window.addEventListener("scroll", function(){
  var header = document.querySelector("header")
  header.classList.toggle("sticky", window.scrollY > 0);
})


const btnHam = window.document.querySelector('.ham-btn');

const btntimes = window.document.querySelector('.times-btn');

const footer = window.document.querySelector('.control');

btnHam.addEventListener('click', function(){
  if(btnHam.className !== "")
  {
    btnHam.style.display = "none";
    btntimes.style.display = "block"
    footer.classList.add('move-up')
  }
})