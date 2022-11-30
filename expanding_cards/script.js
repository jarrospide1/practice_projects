const img = document.querySelectorAll(".image");
console.log(img)

for(let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        img[i].classList.toggle("photo_expanded")
    })
}

// function respondToCLick() {
//     img.classList.toggle("photo_expanded")
    
// }
