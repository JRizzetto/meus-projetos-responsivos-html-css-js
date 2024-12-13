const row = document.querySelector('.row');
const row2 = document.querySelector('.row2');
const row3 = document.querySelector('.row3');
const one = document.querySelector('.one');

row.addEventListener("click", () => {
    one.src = "./img/product1.png"
})

row2.addEventListener("click", () => {
    one.src = "./img/product2.png"
})

row3.addEventListener("click", () => {
    one.src = "./img/product3.png"
})