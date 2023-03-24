let imgArray = new Array();
imgArray[0] = document.querySelector("#eeny");
imgArray[1] = document.querySelector("#lottery");
imgArray[2] = document.querySelector("#coins");
imgArray[3] = document.querySelector("#thinking");
imgArray[4] = document.querySelector("#angel");
imgArray[5] = document.querySelector("#flowers");
imgArray[6] = document.querySelector("#gumball");
imgArray[7] = document.querySelector("#cootie");
imgArray[8] = document.querySelector("#eight-ball");
imgArray[9] = document.querySelector("#rock");
imgArray[10] = document.querySelector("#dice");


imageShown = 0;

function randomImage(){
	console.log("click");
		var num = Math.floor(Math.random() * imgArray.length);
		console.log(num);
		imgArray[num].style.display = "block";
		document.querySelector("#display").appendChild(imgArray[num]);
		tryAgain.style.display = "block";
};

document.querySelector("#button").addEventListener("click", randomImage);

var tryAgain = document.querySelector("#final");
tryAgain.style.display = "none";

function reLoad(){
    window.location.reload();
};
tryAgain.addEventListener("click",reLoad);

