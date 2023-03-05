const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const container = document.getElementById("img-container")
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.id = "bg"

document.body.appendChild(bgImage);