const img = document.querySelectorAll(".image");

for(let i = 0; i < img.length; i++) {
    img[i].addEventListener("click", () => {
        removeClass();
        img[i].classList.toggle("photo_expanded");
    })
}

function removeClass() {
    img.forEach(image => {
        image.classList.remove("photo_expanded");
    })
}

// Dark Mode
const darkModeButton = document.querySelector(".theme-button ");
const body = document.querySelector("body");
const nightPhoto = document.querySelectorAll(".night-photo");
const dayPhoto = document.querySelectorAll(".day-photo");
const label = document.querySelector("label");

function themeMode() {
    label.addEventListener("click", () => {
        body.classList.toggle("night-background");
        body.classList.toggle("ligth-background");
        for(let i = 0; i < nightPhoto.length; i++) {
            nightPhoto[i].classList.toggle("hide");
            dayPhoto[i].classList.toggle("hide");
        }
    })
}
themeMode();