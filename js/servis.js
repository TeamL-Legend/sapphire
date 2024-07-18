let audioNode = document.querySelector(`.audio`);
let pbtnNode = document.querySelector(`.pbtn`);
let pbtndivNode = document.querySelector(`.pbtndiv`);
let msclogoNode = document.querySelector(`.msclogo`);
let pbariNode = document.querySelector(`.pbari`);
let pbaroNode = document.querySelector(`.pbaro`);
let mscnameNode = document.querySelector(`.mscname`);
let nbtnNode = document.querySelector(`.nbtn`);
let bbtnNode = document.querySelector(`.bbtn`);
let artistbtnNode = document.querySelector(`.artistbtn`);
let favoritebtn = document.querySelector(`.favoritebtn`);

(function(){
let plert = `Данынй сервис на стадии разработки, также данный сервис предназначен для пользователей компьютера, а это значит на мобильных устройствах он будет без нужного дизайна`
    alert(plert);
}())


const musics = [`Run Run Run`, `supersonic`, `Marmalade`, `crimson lada`, `Am I with you`, `scorpion`, `gift`, `finish`, `bad girl`, `She's close`, `dances`, `asphalt 8`, `Rammstein Ausländer`, `lanaya-ona-pishet-mne-wassup-mp3`]
let musicNumber = Math.floor(Math.random() * musics.length)

function loadMusic(music) {
    mscnameNode.innerHTML = music;
    audioNode.src = `audio/${music}.mp3`
    msclogoNode.innerHTML = music
}

loadMusic(musics[musicNumber])

function nextMusic() {
    musicNumber ++;
    if (musicNumber > musics.length - 1) {
        musicNumber = 0
    }
    loadMusic(musics[musicNumber])
    audioNode.play()
    pbtnNode.src = `./assets/pause.svg`;
    msclogoNode.classList.add(`activate`);

}

nbtnNode.addEventListener(`click`, nextMusic)

function backMusic() {
    musicNumber--;
    if (musicNumber < 0) {
        musicNumber = musics.length - 1;
    }
    loadMusic(musics[musicNumber])
    audioNode.play()
    pbtnNode.src = `./assets/pause.svg`;
    msclogoNode.classList.add(`activate`);
}

bbtnNode.addEventListener(`click`, backMusic)

pbtnNode.addEventListener(`click`, function () {
    let isplayer = pbtndivNode.classList.contains(`player`);
    if (isplayer) {
        audioNode.pause();
        pbtndivNode.classList.remove(`player`);
        msclogoNode.classList.remove(`activate`);
        pbtnNode.src = `./assets/play.svg`;

    } else {
        pbtndivNode.classList.add(`player`);
        msclogoNode.classList.add(`activate`);
        audioNode.play();
        pbtnNode.src = `./assets/pause.svg`;
    }
});

function progressbar(e) {
    let { duration, currentTime } = e.srcElement
    let progressbarprocent = (currentTime / duration) * 100
    pbariNode.style.width = `${progressbarprocent}%`
}

audioNode.addEventListener(`timeupdate`, progressbar);

function progres(e) {
    let width = this.clientWidth;
    let cX = e.offsetX
    let duration = audioNode.duration


    audioNode.currentTime = (cX / width) * duration
}

pbaroNode.addEventListener(`click`, progres);



audioNode.addEventListener(`ended`, nextMusic);


function replay(){
console.log(audioNode.currentTime)  
audioNode.currentTime = audioNode.currentTime - 30
}


artistbtnNode.addEventListener(`click`, replay)

function favorite(){
    let favdiv = document.querySelector(`.favdiv`)
let fav = favdiv.classList.contains(`fav`)
    if(fav){     
        favoritebtn.src = `./assets/favoritecheck.svg`;
        favdiv.classList.toggle(`fav`)
    } else {
        favdiv.classList.toggle(`fav`)
        favoritebtn.src = `./assets/favorite.svg`;
    }

}

