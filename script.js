window.onload = init;

const heads = "heads.png"
const tails = "tails.png"

function throwCoin() {
	var coin = document.getElementById("coin");
	var rand = Math.floor(Math.random()*2);
	var image = rand == 0 ? heads : tails;
	document["coin"].src = image;
}

function init() {
	var coin = document.getElementById("coin");
	coin.addEventListener("click", throwCoin, false);
}