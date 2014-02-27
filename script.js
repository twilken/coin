window.onload = init;

function throwCoin() {
	var coin = document.getElementById("coin");
	var rand = Math.floor(Math.random()*2)
	if (rand == 0) {
		coin.firstChild.nodeValue = "HEADS";
	} else {
		coin.firstChild.nodeValue = "TAILS";
  	}
}

function init() {
	var button = document.getElementById("button");
	button.addEventListener("click", throwCoin, false);
}