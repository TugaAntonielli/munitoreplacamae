const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")

card1.addEventListener("click",(e)=>{
    card1.classList.toggle("flip")
});

card2.addEventListener("click",(e)=>{
    card2.classList.toggle("flip")
});

card3.addEventListener("click",(e)=>{
    card3.classList.toggle("flip")
});