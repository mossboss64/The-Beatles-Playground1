let r;
let currentAlbum = "abbey";
const audioPlayer = document.getElementById("album-song");
const albumTracks = {
  abbey: "audio/goldenslumb.ogg",
  sgt: "audio/a-day-in-the-life.ogg",
  hardday: "audio/dancewyou.ogg",
  help: "audio/youve-got-to-hide-your-love-away.ogg",
  rs: "in-my-life.ogg",
  white: "julia.ogg",
  pls: "do-you-want-to-know-a-secret.ogg",
  lib: "longroad.ogg",
};
document.querySelector(".play-button").addEventListener("click", () => {
  if (!audioPlayer.src) {
    audioPlayer.src = albumTracks[currentAlbum];
  }
  audioPlayer.play();
});

document.querySelector(".pause-button").addEventListener("click", () => {
  audioPlayer.pause();
});

function changeToAbbey() {
  currentAlbum = "abbey";
  audioPlayer.pause();
  audioPlayer.src = albumTracks[currentAlbum];
  document.querySelector(".beatlecol-left img").src =
    "images/beatles/beatlesabbyroaderaa.png";
  document.querySelector(".album-title img").src =
    "images/titles/abbyrdtitle1.png";
  document.querySelector(".info").textContent =
    "Abbey Road (1969) - The Beatles' Second to Last Album";
}

function changeToSgt() {
  currentAlbum = "sgt";
  audioPlayer.pause();
  audioPlayer.src = albumTracks[currentAlbum];
  document.querySelector(".beatlecol-left img").src =
    "images/beatles/sgtpeppersbeatles1.png";
  document.querySelector(".album-title img").src =
    "images/titles/sgtpepperstitle.jpeg";
  document.querySelector(".info").textContent =
    "Sgt Pepper's Lonely Hearts Club Band! (1967)";
}

function changeToHardDay() {
  currentAlbum = "hardday";
  audioPlayer.pause();
  audioPlayer.src = albumTracks[currentAlbum];
  document.querySelector(".beatlecol-left img").src =
    "images/beatles/hard-days-night (1).png";
  document.querySelector(".album-title img").src =
    "images/titles/harddaysnighttitle (1).png";
  document.querySelector(".info").textContent =
    "Arguably one of their most iconic albums!!";
}

function changeToHelp() {
  currentAlbum = "help";
  audioPlayer.pause();
  audioPlayer.src = albumTracks[currentAlbum];
  document.querySelector(".beatlecol-left img").src =
    "images/beatles/helpbeatlespiano.png";
  document.querySelector(".album-title img").src =
    "images/titles/beatleshelp!.png";
  document.querySelector(".info").textContent = "The Beatles - Help (1965)";
}

function changeToRS() {
  currentAlbum = "rs";
  audioPlayer.pause();
  audioPlayer.src = albumTracks[currentAlbum];

  document.querySelector(".beatlecol-left img").src =
    "images/beatles/1965rbbersoulbeatles.png";
  document.querySelector(".album-title img").src =
    "images/titles/rbbersoultitle (1).png";
  document.querySelector(".info").textContent =
    "The Beatles - Rubber Soul (1966)";
}

function changeToWhite() {
  currentAlbum = "white";
  audioPlayer.pause();
  audioPlayer.src = albumTracks[currentAlbum];
  document.querySelector(".beatlecol-left img").src =
    "images/beatles/whitealbm1968beat1.png";
  document.querySelector(".album-title img").src =
    "images/titles/white-albm-title1.png";
  document.querySelector(".info").textContent =
    "The Beatles - White Album (1968)";
}

function goToPls() {
  currentAlbum = "pls";
  audioPlayer.pause();
  audioPlayer.src = albumTracks[currentAlbum];
  document.querySelector(".beatlecol-left img").src =
    "images/beatles/1963beat.png";
  document.querySelector(".album-title img").src =
    "images/titles/plsplsmetitle.png";
  document.querySelector(".info").textContent =
    "The Beatles - Please Please Me (1963)";
}

function goToLIB() {
  currentAlbum = "lib";
  audioPlayer.pause();
  audioPlayer.src = albumTracks[currentAlbum];
  document.querySelector(".beatlecol-left img").src =
    "images/beatles/beatles-rooftopconcert.jpg";
  document.querySelector(".album-title img").src =
    "images/titles/letitbetitle1.png";
  document.querySelector(".info").textContent =
    "The Beatles - Let It Be (1970)";
}

function randomizer() {
  r = Math.floor(Math.random() * 8) + 1;
  console.log(r);

  if (r == 1) changeToAbbey();
  if (r == 2) goToLIB();
  if (r == 3) goToPls();
  if (r == 4) changeToWhite();
  if (r == 5) changeToRS();
  if (r == 6) changeToHelp();
  if (r == 7) changeToHardDay();
  if (r == 8) changeToSgt();
}
//explorepage
document.querySelectorAll(".historyBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.getElementById("explorePanel").hidden = true;
    const panelId = btn.getAttribute("data-panel");
    document.getElementById(panelId).hidden = false;
  });
});

document.querySelectorAll(".backBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.hidden = true;
    document.getElementById("explorePanel").hidden = false;
  });
});
