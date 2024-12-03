let fruits = [{ name: "Orange", image: "orange.jpg" }, { name: "Kiwi", image: "kiwi.jpg" }, { name: "Banane", image: "banane.jpg" }, { name: "Peche", image: "peche.jpg" }, { name: "Cerise", image: "cerise.jpg" }];

let left = document.getElementById("imageFruit");

let right = document.getElementById("fruits");

let selectedImage = "all-fruits.jpg";


fruits.forEach((fruit) => {

    let fruitBtn = document.createElement("div");
    fruitBtn.textContent = fruit.name;
    fruitBtn.classList.add("fruitBtn");
    fruitBtn.style.height = 100 / fruits.length + 'vh';

    fruitBtn.addEventListener("click", () => {
        document.querySelectorAll(".fruitBtn").forEach((btn) => {
            btn.classList.remove("selected")
        });

        fruitBtn.classList.add("selected") ;
        selectedImage = fruit.image ;

    });

    fruitBtn.addEventListener("mouseover", () => {
        left.style.backgroundImage = `url(${fruit.image})`;
    })

    fruitBtn.addEventListener("mouseout", () => {
        left.style.backgroundImage = `url(${selectedImage})`;
    });



    right.appendChild(fruitBtn);

});
