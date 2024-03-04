const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")
const card5 = document.querySelector(".card5")

card1.addEventListener("click",(e)=>{
    card1.classList.toggle("flip")
});

card2.addEventListener("click",(e)=>{
    card2.classList.toggle("flip")
});

card3.addEventListener("click",(e)=>{
    card3.classList.toggle("flip")
});

card4.addEventListener("click",(e)=>{
    card4.classList.toggle("flip")
});

card5.addEventListener("click",(e)=>{
    card5.classList.toggle("flip")
});