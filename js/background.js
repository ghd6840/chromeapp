const images = [
    //"santorini.jpg",
    //"mallorca.jpg",
    "manhattan.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url('images/${chosenImage}')`;

