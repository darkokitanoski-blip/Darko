const menubar = document.querySelector(".menu-bar-wrapper")
const menubaricon = document.querySelector(".menu-bar-wrapper-icons")
const hero = document.querySelector(".hero")
const hiddenul = document.querySelector(".hidden-ul")
const menubarburger = document.querySelector("#menubarburger")
const selectedtabtext = document.querySelector(".menu-bar-wrapper-selected-tab")
const userInfoButton = document.querySelector("#user-info-button")
const wrapperInfo = document.querySelector(".wrapper-info")

menubaricon.addEventListener("click", () => {
    if (menubar.classList.contains("active-menu-bar")) {
        menubar.classList.remove("active-menu-bar")
        hiddenul.classList.remove("visible-ul")
        if (window.innerWidth >= 1000) {

            hero.style.left = "21%"
            menubaricon.querySelector("svg").style.left = "50%"
        } else {
            hero.style.left = "0%"
            menubarburger.style.left = "90%"
        }
        selectedtabtext.style.display = "block"
    } else {
        menubar.classList.add("active-menu-bar")
        if (window.innerWidth >= 1000) {

            hero.style.left = "8%"
            menubaricon.querySelector("svg").style.left = "20%"
        } else {
            hero.style.left = "0%"
            menubarburger.style.left = "60%"
        }

        hiddenul.classList.add("visible-ul")
        selectedtabtext.style.display = "none"

    }
})

userInfoButton.addEventListener("click", () => {
    wrapperInfo.classList.toggle("active-wrapper-info")
})

window.addEventListener("resize", () => {

    if (window.innerWidth >= 1300) {
        hero.style.left = "21%"
    } else {
        hero.style.left = "0%"
                window.location.reload();
    }

    if (window.innerWidth >= 1000) {
        wrapperInfo.classList.remove("active-wrapper-info")
        window.location.reload();
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