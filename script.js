let r;
let currentAlbum = "abbey";
const audioPlayer = document.getElementById("album-song");
audioPlayer.addEventListener("loadstart", () => {
  console.log("AUDIO SRC:", audioPlayer.src);
});
const albumTracks = {
  abbey: "audio/goldenslumb.ogg",
  sgt: "audio/a-day-in-the-life.ogg",
  hardday: "audio/dancewyou.ogg",
  help: "audio/youve-got-to-hide-your-love-away.ogg",
  rs: "audio/in-my-life.ogg",
  white: "audio/julia.ogg",
  pls: "audio/do-you-want-to-know-a-secret.ogg",
  lib: "The-Beatles-Playground1/audio/longroad.ogg",
};
document.querySelector(".play-button").addEventListener("click", () => {
  audioPlayer.pause();
  audioPlayer.removeAttribute("src");
  audioPlayer.src = albumTracks[currentAlbum];
  audioPlayer.load();
  audioPlayer.play().catch(err => console.error(err));
});
document.querySelector(".pause-button").addEventListener("click", () => {
  audioPlayer.pause();
});

function changeToAbbey() {
  setTheme("#eae6df", "#cfa86b");
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
  setTheme("#d7263d", "#fbb13c", "black");
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
  setTheme("#0d1b2a", "#1b263b", "white");
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
  setTheme("#1f6ae1", "#ffffff", "black");
  currentAlbum = "help";
  audioPlayer.pause();
  audioPlayer.src = albumTracks[currentAlbum];
  document.querySelector(".beatlecol-left img").src =
    "images/beatles/helpbeatlespiano1.png";
  document.querySelector(".album-title img").src =
    "images/titles/beatleshelp!.png";
  document.querySelector(".info").textContent = "The Beatles - Help (1965)";
}
//test
function changeToRS() {
  setTheme("#6a4f3b", "#d8c7b3", "black");
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
  setTheme("#ffffff", "#e0e0e0", "black");
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
  setTheme("#2e2e2e", "#f2f2f2", "black");
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
//themecolors
function setTheme(main, accent, text = "black") {
  document.documentElement.style.setProperty("--bg-main", main);
  document.documentElement.style.setProperty("--bg-accent", accent);
  document.documentElement.style.setProperty("--text-color", text);
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




