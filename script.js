function openDoor() {
  document.getElementById("click-door").style.display = "none";
  document.getElementById("main-content").style.display = "block";
}

let noClickCount = 0;

const sadImages = [
  "/images/nao1.jpg",
  "/images/nao2.jpg",
  "/images/nao3.jpg",
  "/images/nao5.jpg",
  "/images/nao4.jpg",
];

function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noClickCount++;

    if (noClickCount <= 5) {
      document.getElementsByClassName("image")[0].src =
        sadImages[noClickCount - 1];
      document.getElementById("question").textContent =
        'VOCÊ CLICOU NO "NÃOOO"??!!';
      document.getElementById("name").style.display = "none";
      document.getElementsByClassName("image2")[0].style.display = "none";
    } else {
      document.getElementsByClassName("image")[0].src = "/images/nao7.jpg";
      const questionElement = document.getElementById("question");
      questionElement.textContent =
        "Ta, já que você não quer ter a melhor vida do mundo e ser cuidada como nunca uma mulher foi, fecha o site e não fala mais comigo, estarei chorandoo eternamente ";
      questionElement.className = "message-text";
      noClickCount = 0;

      document.getElementById("no-button").style.display = "none";
      document.getElementById("yesButton").style.display = "none";
    }

    noButton.style.position = "absolute";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
  }

  if (response === "Yes") {
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();
    document.getElementById("yesButton").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.textContent =
      "AAEEEEEEEEEEE EU TE AMO MUITOOOOO e de agora em diante seu nome é LETÍCIA GUEDES GONZAGA RESENDE!!!";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";

    const existingImage = document.getElementsByClassName("image")[0];
    existingImage.parentNode.removeChild(existingImage);

    const videoElement = document.createElement("video");
    /*         videoElement.setAttribute("width", "320"); */
    videoElement.setAttribute("height", "600");
    videoElement.setAttribute("controls", "");
    videoElement.setAttribute("autoplay", "");
    videoElement.setAttribute("src", "/images/alegria.mp4");
    videoElement.innerHTML = "Your browser does not support the video tag.";

    videoElement.className = "responsive-video";
    const container = document.querySelector(".container");
    container.appendChild(videoElement);

    const videoElement2 = document.createElement("video");
    videoElement2.setAttribute("height", "600");
    videoElement2.setAttribute("margin", "0");
    videoElement2.setAttribute("controls", "");
    videoElement2.setAttribute("autoplay", "");
    videoElement2.setAttribute("src", "/images/video1.mp4");
    videoElement2.innerHTML = "Your browser does not support the video tag.";

    videoElement2.className = "responsive-video2";
    const container2 = document.querySelector(".container");
    container2.appendChild(videoElement2);

    const videoElement3 = document.createElement("video");
    videoElement3.setAttribute("height", "600");
    videoElement3.setAttribute("margin", "0");
    videoElement3.setAttribute("controls", "");
    videoElement3.setAttribute("autoplay", "");
    videoElement3.setAttribute("src", "/images/video3.mp4");
    videoElement3.innerHTML = "Your browser does not support the video tag.";

    videoElement3.className = "responsive-video3";

    const container3 = document.querySelector(".container");
    container3.appendChild(videoElement3);

    /*         document.getElementsByClassName("image")[0].src = "images/dance.gif"; */
  }
}
