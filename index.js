function getMobileWidth() {
    return 1.4 * document.documentElement.clientHeight;
}

function updateLayout() {
    const text = document.getElementById("text");
    const image = document.getElementById("image");

    if (document.documentElement.clientWidth < getMobileWidth()) {
        image.style.right = null;
        image.style.left = "50%";
        image.style.transform = "translate(-50%)";

        text.style.left = "50%";
    } else {
        image.style.left = null;
        image.style.transform = null;
        image.style.right = "-300px"

        text.style.left = "25%";
    }
}

window.onresize = updateLayout
window.onload = updateLayout