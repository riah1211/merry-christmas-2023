
var to = 'Phạm Thu Hà';
var gift_image_url = '1.jpg';
var opened = 0;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");


function init() {
  playMusic();
  var _giftLink,
    _giftImg;

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener("click", function (e) {
    if (opened == 0) {
      present.classList.toggle("open");
      document.getElementById('card').classList.add('card-show');
      playMusic();
      opened++;
    }

  }, false);

  nametag.innerText = to;
}

init();

function playMusic() {
  var myAudio = document.getElementById('playAudio');
  if (myAudio.duration > 0 && !myAudio.paused) {
    //Its playing...do your job

  } else {
    myAudio.play()
    //Not playing...maybe paused, stopped or never played.

  }
}