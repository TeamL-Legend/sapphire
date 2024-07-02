let audioNode = document.querySelector(`.audio`);
let playNode = document.querySelector(`.play`);
let playdivNode = document.querySelector(`.playdiv`);
let musicimgNode = document.querySelector(`.musicimg`);
let progressbarNode = document.querySelector(`.procentbar`);
let progresscontainerNode = document.querySelector(`.progressbar`);

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

function progressbar(e){
   let {duration, currentTime} = e.srcElement
   let progressbarprocent = (currentTime / duration) * 100
   progressbarNode.style.width = `${progressbarprocent}%`
}

audioNode.addEventListener(`timeupdate`, progressbar);

function progres(e){
    let width = this.clientWidth;
    let cX = e.offsetX
    let duration = audioNode.duration
    

    audioNode.currentTime = (cX / width) * duration
}

progresscontainerNode.addEventListener(`click`, progres);



audioNode.addEventListener(`ended`);

