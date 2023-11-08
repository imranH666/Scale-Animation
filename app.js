const scaleMain = document.querySelector(".scale-main")


setInterval(() => {
    const circle = document.createElement("div")
    circle.className = "circle"
    scaleMain.appendChild(circle)
    setTimeout(() => {
        scaleMain.removeChild(circle)
    }, 1000);
}, 100)

