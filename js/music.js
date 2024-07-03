let audioNode = document.querySelector(`.audio`);
let playNode = document.querySelector(`.play`);
let playdivNode = document.querySelector(`.playdiv`);
let musicimgNode = document.querySelector(`.musicimg`);
let progressbarNode = document.querySelector(`.procentbar`);
let progresscontainerNode = document.querySelector(`.progressbar`);
let musicnameNode = document.querySelector(`.musicname`);
let nextNode = document.querySelector(`.next`);
let backNode = document.querySelector(`.back`);

(function(){
    let plert = `Сообщение от сервера, DDOS был остановлен обновленной системой sapphire, DDOS QUARD COMPLETE, сервера востоновленны`
    alert(plert)
}())

const musics = [`Run Run Run`, `supersonic`, `Marmalade`, `crimson lada`, `Am I with you`, `scorpion`, `gift`, `finish`, `bad girl`];
let musicNumber = Math.floor(Math.random() * musics.length)

function loadMusic(music) {
    musicnameNode.innerHTML = music;
    audioNode.src = `assets/${music}.mp3`
    musicimgNode.innerHTML = music
}

loadMusic(musics[musicNumber])

function nextMusic() {
    musicNumber ++;
    if (musicNumber > musics.length - 1) {
        musicNumber = 0
    }
    loadMusic(musics[musicNumber])
    audioNode.play()
    playNode.src = `./assets/pause.png`;
    musicimgNode.classList.add(`activate`);

}

nextNode.addEventListener(`click`, nextMusic)

function backMusic() {
    musicNumber--;
    if (musicNumber < 0) {
        musicNumber = musics.length - 1;
    }
    loadMusic(musics[musicNumber])
    audioNode.play()
    playNode.src = `./assets/pause.png`;
    musicimgNode.classList.add(`activate`);
}

backNode.addEventListener(`click`, backMusic)

playNode.addEventListener(`click`, function () {
    let isplayer = playdivNode.classList.contains(`player`);
    if (isplayer) {
        audioNode.pause();
        playdivNode.classList.remove(`player`);
        musicimgNode.classList.remove(`activate`);
        playNode.src = `./assets/play.png`;

    } else {
        playdivNode.classList.add(`player`);
        musicimgNode.classList.add(`activate`);
        audioNode.play();
        playNode.src = `./assets/pause.png`;
    }
});

function progressbar(e) {
    let { duration, currentTime } = e.srcElement
    let progressbarprocent = (currentTime / duration) * 100
    progressbarNode.style.width = `${progressbarprocent}%`
}

audioNode.addEventListener(`timeupdate`, progressbar);

function progres(e) {
    let width = this.clientWidth;
    let cX = e.offsetX
    let duration = audioNode.duration


    audioNode.currentTime = (cX / width) * duration
}

progresscontainerNode.addEventListener(`click`, progres);



audioNode.addEventListener(`ended`, nextMusic);

