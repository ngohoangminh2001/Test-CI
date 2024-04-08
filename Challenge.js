window.onload = () => {
    document.getElementById("chooseColor").addEventListener("change", changeColor);
    function changeColor() {
        document.body.style.backgroundColor = document.getElementById("chooseColor").value;
        document.getElementById("hex").innerHTML = document.getElementById("chooseColor").value;
    }
    document.getElementById("red").addEventListener('click', redColor);
    function redColor() {
        document.body.style.backgroundColor = document.getElementById("red").backgroundColor.value;
    }
    document.getElementById("green").addEventListener('click', greenColor);
    function greenColor() {
        document.body.style.backgroundColor = document.getElementById("green").backgroundColor.value;
    }
    document.getElementById("blue").addEventListener('click', blueColor);
    function blueColor() {
        document.body.style.backgroundColor = document.getElementById("blue").backgroundColor.value;
    }
    function copy() {
        document.getElementById("hex").select();
        document.execCommand('copy');
        console.log("Copied to clipboard");
    }
}