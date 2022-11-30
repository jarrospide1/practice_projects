const img = document.querySelectorAll(".image");
console.log(img)

for(let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        removeClass();
        img[i].classList.toggle("photo_expanded");
    })
}

function removeClass() {
    img.forEach(image => {
        image.classList.remove("photo_expanded")
    })
}

// function addText() {
//     switch
// }