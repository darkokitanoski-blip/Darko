const menubar = document.querySelector(".menu-bar-wrapper")
const menubaricon = document.querySelector(".menu-bar-wrapper-icons")
const hero = document.querySelector(".hero")
const hiddenul = document.querySelector(".hidden-ul")
const selectedtabtext = document.querySelector(".menu-bar-wrapper-selected-tab")

menubaricon.addEventListener("click", () => {
    if (menubar.classList.contains("active-menu-bar")) {
        menubar.classList.remove("active-menu-bar")
        hiddenul.classList.remove("visible-ul")
        if (window.innerWidth >= 1000) {

            hero.style.left = "21%"
        } else {
            hero.style.left = "0%"
        }
        selectedtabtext.style.display = "block"
        menubaricon.querySelector("svg").style.left = "50%"
    } else {
        menubar.classList.add("active-menu-bar")
        hero.style.left = "8%"
        hiddenul.classList.add("visible-ul")
        selectedtabtext.style.display = "none"
        menubaricon.querySelector("svg").style.left = "20%"

    }
})

window.addEventListener("resize", () => {


    if (window.innerWidth >= 1000) {

        hero.style.left = "21%"
    } else {
        hero.style.left = "0%"
    }
})




const gamingIcon = document.getElementById("gaming");

const gameOverlay = document.getElementById("game-overlay");
const closeGame = document.getElementById("close-game");
const fullscreenGame = document.getElementById("fullscreen-game");
const gameWindow = document.querySelector(".game-window");


// =========================================
// OPEN GAME
// =========================================

gamingIcon.addEventListener("click", () => {

    gameOverlay.classList.add("active");
    console.log("works?")

    // Prevent website from scrolling
    document.body.style.overflow = "hidden";

});


// =========================================
// CLOSE GAME
// =========================================

function closeGameWindow() {

    gameOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


// Close button
closeGame.addEventListener("click", closeGameWindow);


// =========================================
// CLICK OUTSIDE WINDOW TO CLOSE
// =========================================

gameOverlay.addEventListener("click", (event) => {

    if (event.target === gameOverlay) {
        closeGameWindow();
    }

});


// =========================================
// ESC TO CLOSE
// =========================================

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeGameWindow();
    }

});


// =========================================
// FULLSCREEN
// =========================================

fullscreenGame.addEventListener("click", async () => {
    try {
        if (!document.fullscreenElement) {
            await gameWindow.requestFullscreen();
            gameWindow.classList.add("game-fullscreen");
        } else {
            await document.exitFullscreen();
            gameWindow.classList.remove("game-fullscreen");
        }
    } catch (error) {
        console.log("Fullscreen unavailable:", error);
    }
});

document.addEventListener("fullscreenchange", () => {
    if (!document.fullscreenElement) {
        gameWindow.classList.remove("game-fullscreen");
    }
});