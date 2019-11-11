//var arrFront = document.getElementsByClassName('front');
var section1Slide = ["museum", "nauty", "beach", "jamieLean", "ferry", "rail" ,"totoro", "Alice"];
var section2Slide = ["museum2", "library", "J_A_M_I_E", "nautyCamel", "tunnel", "noNeck", "moonWorld" ,"poker"];
var section3Slide = ["love", "saultMountain", "dam", "library2", "FerrisWheel", "taroko", "rainbowChurch", "Hutoubei"];
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var n = 8;
setInterval(function(){
	section1.style.backgroundImage = `url(images/${section1Slide[n%8]}.jpg)`;
	section2.style.backgroundImage = `url(images/${section2Slide[n%8]}.jpg)`;
	section3.style.backgroundImage = `url(images/${section3Slide[n%8]}.jpg)`;
	n++;
}, 5000);

let root = document.documentElement;
var footer = document.getElementById('footer');
root.addEventListener("mousemove", event =>{
	var x;
	var y;
	if(event.clientY > (window.screen.availHeight - footer.offsetHeight)){
		x = event.clientX / footer.offsetWidth;
		y = (event.clientY - (window.screen.availHeight - footer.offsetHeight)) / footer.offsetHeight;
	}
	else{
		x = event.clientX / footer.offsetWidth;;
		y = 0;
	}
	root.style.setProperty('--mouse-x', x);
	root.style.setProperty('--mouse-y', y);
});

var arrBack = document.getElementsByClassName('back');
var cuteJamie = document.getElementById('gameFinal');
var bar = document.getElementById('progressBar');
var pCoor = [arrBack[0].getBoundingClientRect(),
			arrBack[1].getBoundingClientRect(),
			arrBack[2].getBoundingClientRect(),
			arrBack[3].getBoundingClientRect(),
			arrBack[4].getBoundingClientRect(),
			arrBack[5].getBoundingClientRect(),
			arrBack[6].getBoundingClientRect(),
			arrBack[7].getBoundingClientRect(),
			arrBack[8].getBoundingClientRect(),
			arrBack[9].getBoundingClientRect(),
			arrBack[10].getBoundingClientRect(),
			arrBack[11].getBoundingClientRect(),
			arrBack[12].getBoundingClientRect(),
			arrBack[13].getBoundingClientRect(),
			arrBack[14].getBoundingClientRect(),
			arrBack[15].getBoundingClientRect()];
			
cuteJamieCoor = cuteJamie.getBoundingClientRect();
var partWidth = (cuteJamieCoor.right - cuteJamieCoor.left)/4;
var partHeight = (cuteJamieCoor.bottom - cuteJamieCoor.top)/4;
var index = [1,1,2,2,
			3,3,4,4,
			5,5,6,6,
			7,7,8,8];
var randomArr = [2,2,2,2,2,2,2,2];
var n = 0;
while(n <16){
	var a = Math.floor(Math.random() * 8);     // returns a random integer from 0 to 7
	if(randomArr[a]-- > 0){
		index[n++] = a + 1;
	}
}	
var cnt = 0;
var success = 0;
var like50Times = 0;
var open = [99,99]; /* 為index */
var opened = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; /* 已經配對的排組(只有0&1) */
var openIndex = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; /* 0~15 開啟的順序 填入index */
var openCnt = 0;

var likeIcon = document.getElementById('imageWall');
var jamieLike = document.getElementById('jamieLike');
likeIcon.addEventListener("mouseover", function mouseOver(){
	jamieLike.style.opacity = (like50Times-20)/30;
	if(like50Times < 50)
		like50Times ++;
	else
		like50Times = 50;
	
	bar.style.width = `${(like50Times/50) * 100}%`;
	document.getElementById('percent').innerHTML = (like50Times/50) * 100 + "%"; 
	
	if(like50Times == 50){
		document.getElementById('likelike').style.opacity = "1";
		document.getElementById('changeWord').innerHTML = "是孟瑾的生日～";
		document.getElementById('changeWord').style.color = "red";
	}
});
for(var i=0;i<16;i++){
	addClick(i);
}
function resetBack(){
	cnt = 0; 
	if(index[open[0]] == index[open[1]] && open[0] != open[1]){		/* bingo */
		openIndex[openCnt] = open[0];
		openIndex[openCnt+1] = open[1];
		arrBack[open[0]].style.transform = "";
		arrBack[open[1]].style.transform = "";
		setTimeout(function(){arrBack[open[0]].src = `images/cuteJamie${openCnt}.jpg`;}, 250);
		setTimeout(function(){arrBack[open[1]].src = `images/cuteJamie${openCnt+1}.jpg`;}, 250);
		setTimeout(function(){openCnt+=2;}, 250);
		opened[open[0]] = 1;
		opened[open[1]] = 1;
		success ++;
		if(success == 8){
			
			/* display 16 part of cuteJamie and hidden */
			
			arrBack[0].style.opacity = "0.5";
			arrBack[1].style.opacity = "0.5";
			arrBack[2].style.opacity = "0.5";
			arrBack[3].style.opacity = "0.5";
			arrBack[4].style.opacity = "0.5";
			arrBack[5].style.opacity = "0.5";
			arrBack[6].style.opacity = "0.5";
			arrBack[7].style.opacity = "0.5";
			arrBack[8].style.opacity = "0.5";
			arrBack[9].style.opacity = "0.5";
			arrBack[10].style.opacity = "0.5";
			arrBack[11].style.opacity = "0.5";
			arrBack[12].style.opacity = "0.5";
			arrBack[13].style.opacity = "0.5";
			arrBack[14].style.opacity = "0.5";
			arrBack[15].style.opacity = "0.5";
			/*
			setTimeout( function(){arrBack[0].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[1].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[2].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[3].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[4].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[5].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[6].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[7].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[8].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[9].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[10].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[11].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[12].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[13].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[14].style.display = "initial";}, 300);
			setTimeout( function(){arrBack[15].style.display = "initial";}, 300);
			*/
			/* show the 16 part of cuteJamie */
			
			setTimeout( function(){arrBack[0].style.opacity = "1";}, 500);
			setTimeout( function(){arrBack[1].style.opacity = "1";}, 550);
			setTimeout( function(){arrBack[2].style.opacity = "1";}, 600);
			setTimeout( function(){arrBack[3].style.opacity = "1";}, 650);
			setTimeout( function(){arrBack[4].style.opacity = "1";}, 700);
			setTimeout( function(){arrBack[5].style.opacity = "1";}, 750);
			setTimeout( function(){arrBack[6].style.opacity = "1";}, 800);
			setTimeout( function(){arrBack[7].style.opacity = "1";}, 850);
			setTimeout( function(){arrBack[8].style.opacity = "1";}, 900);
			setTimeout( function(){arrBack[9].style.opacity = "1";}, 950);
			setTimeout( function(){arrBack[10].style.opacity = "1";}, 1000);
			setTimeout( function(){arrBack[11].style.opacity = "1";}, 1050);
			setTimeout( function(){arrBack[12].style.opacity = "1";}, 1100);
			setTimeout( function(){arrBack[13].style.opacity = "1";}, 1150);
			setTimeout( function(){arrBack[14].style.opacity = "1";}, 1200);
			setTimeout( function(){arrBack[15].style.opacity = "1";
			/* hide 16 part of cuteJamie and show the final one */
				arrBack[0].style.transition= " all 2s ease-in-out";
				arrBack[1].style.transition= " all 2s ease-in-out";
				arrBack[2].style.transition= " all 2s ease-in-out";
				arrBack[3].style.transition= " all 2s ease-in-out";
				arrBack[4].style.transition= " all 2s ease-in-out";
				arrBack[5].style.transition= " all 2s ease-in-out";
				arrBack[6].style.transition= " all 2s ease-in-out";
				arrBack[7].style.transition= " all 2s ease-in-out";
				arrBack[8].style.transition= " all 2s ease-in-out";
				arrBack[9].style.transition= " all 2s ease-in-out";
				arrBack[10].style.transition= " all 2s ease-in-out";
				arrBack[11].style.transition= " all 2s ease-in-out";
				arrBack[12].style.transition= " all 2s ease-in-out";
				arrBack[13].style.transition= " all 2s ease-in-out";
				arrBack[14].style.transition= " all 2s ease-in-out";
				arrBack[15].style.transition= " all 2s ease-in-out";
			}, 1250);
			
			
			setTimeout( function(){
				arrBack[openIndex[0]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[0]].left}px, 
					${cuteJamieCoor.top - pCoor[openIndex[0]].top}px)`;
				arrBack[openIndex[1]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[1]].left + 1*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[1]].top}px)`;
				arrBack[openIndex[2]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[2]].left + 2*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[2]].top}px)`;
				arrBack[openIndex[3]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[3]].left + 3*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[3]].top}px)`;
				arrBack[openIndex[4]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[4]].left}px, 
						${cuteJamieCoor.top - pCoor[openIndex[4]].top + 1*partHeight}px)`;
				arrBack[openIndex[5]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[5]].left + 1*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[5]].top + 1*partHeight}px)`;
				arrBack[openIndex[6]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[6]].left + 2*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[6]].top + 1*partHeight}px)`;
				arrBack[openIndex[7]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[7]].left + 3*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[7]].top + 1*partHeight}px)`;
				arrBack[openIndex[8]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[8]].left}px, 
						${cuteJamieCoor.top - pCoor[openIndex[8]].top+ 2*partHeight}px)`;
				arrBack[openIndex[9]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[9]].left + 1*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[9]].top + 2*partHeight}px)`;
				arrBack[openIndex[10]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[10]].left + 2*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[10]].top + 2*partHeight}px)`;
				arrBack[openIndex[11]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[11]].left + 3*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[11]].top + 2*partHeight}px)`;
				arrBack[openIndex[12]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[12]].left}px, 
						${cuteJamieCoor.top - pCoor[openIndex[12]].top+ 3*partHeight}px)`;
				arrBack[openIndex[13]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[13]].left + 1*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[13]].top + 3*partHeight}px)`;
				arrBack[openIndex[14]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[14]].left + 2*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[14]].top + 3*partHeight}px)`;
				arrBack[openIndex[15]].style.transform = 
					`translate(${cuteJamieCoor.left - pCoor[openIndex[15]].left + 3*partWidth}px, 
						${cuteJamieCoor.top - pCoor[openIndex[15]].top + 3*partHeight}px)`;
			}, 2000);
			
			
			setTimeout( function(){
				arrBack[0].style.display = "none";
				arrBack[1].style.display = "none";
				arrBack[2].style.display = "none";
				arrBack[3].style.display = "none";
				arrBack[4].style.display = "none";
				arrBack[5].style.display = "none";
				arrBack[6].style.display = "none";
				arrBack[7].style.display = "none";
				arrBack[8].style.display = "none";
				arrBack[9].style.display = "none";
				arrBack[10].style.display = "none";
				arrBack[11].style.display = "none";
				arrBack[12].style.display = "none";
				arrBack[13].style.display = "none";
				arrBack[14].style.display = "none";
				arrBack[15].style.display = "none";
				cuteJamie.style.display = "block";
				cuteJamie.style.opacity = "1";
				document.getElementById('game').addEventListener("click", function(){
					window.location='#section1';
				});
			}, 4000);
			
			
		}
	}
	/* fail bingo */
	//else{
		//setTimeout(function (){
			if(opened[0] == 0){
				arrBack[0].style.transform = "";
				addClick(0);
				setTimeout(function(){arrBack[0].src = "images/heart.png";}, 250);
			}
			if(opened[1] == 0){
				arrBack[1].style.transform = "";
				addClick(1);
				setTimeout(function(){arrBack[1].src = "images/heart.png";}, 250);
			}
			if(opened[2] == 0){
				arrBack[2].style.transform = "";
				addClick(2);
				setTimeout(function(){arrBack[2].src = "images/heart.png";}, 250);
			}
			if(opened[3] == 0){
				arrBack[3].style.transform = "";
				addClick(3);
				setTimeout(function(){arrBack[3].src = "images/heart.png";}, 250);
			}
			if(opened[4] == 0){
				arrBack[4].style.transform = "";
				addClick(4);
				setTimeout(function(){arrBack[4].src = "images/heart.png";}, 250);
			}
			if(opened[5] == 0){
				arrBack[5].style.transform = "";
				addClick(5);
				setTimeout(function(){arrBack[5].src = "images/heart.png";}, 250);
			}
			if(opened[6] == 0){
				arrBack[6].style.transform = "";
				addClick(6);
				setTimeout(function(){arrBack[6].src = "images/heart.png";}, 250);
			}
			if(opened[7] == 0){
				arrBack[7].style.transform = "";
				addClick(7);
				setTimeout(function(){arrBack[7].src = "images/heart.png";}, 250);
			}
			if(opened[8] == 0){
				arrBack[8].style.transform = "";
				addClick(8);
				setTimeout(function(){arrBack[8].src = "images/heart.png";}, 250);
			}
			if(opened[9] == 0){
				arrBack[9].style.transform = "";
				addClick(9);
				setTimeout(function(){arrBack[9].src = "images/heart.png";}, 250);
			}
			if(opened[10] == 0){
				arrBack[10].style.transform = "";
				addClick(10);
				setTimeout(function(){arrBack[10].src = "images/heart.png";}, 250);
			}
			if(opened[11] == 0){
				addClick(11);
				arrBack[11].style.transform = "";
				setTimeout(function(){arrBack[11].src = "images/heart.png";}, 250);
			}
			if(opened[12] == 0){
				arrBack[12].style.transform = "";
				addClick(12);
				setTimeout(function(){arrBack[12].src = "images/heart.png";}, 250);
			}
			if(opened[13] == 0){
				arrBack[13].style.transform = "";
				addClick(13);
				setTimeout(function(){arrBack[13].src = "images/heart.png";}, 250);
			}
			if(opened[14] == 0){
				arrBack[14].style.transform = "";
				addClick(14);
				setTimeout(function(){arrBack[14].src = "images/heart.png";}, 250);
			}
			if(opened[15] == 0){
				arrBack[15].style.transform = "";
				addClick(15);
				setTimeout(function(){arrBack[15].src = "images/heart.png";}, 250);
			}
		//}, 500);
	//}
	
}
function removeAndReset(){
	for(var i=0;i<16;i++){
		removeClick(i);
	}
	setTimeout(function(){
		resetBack();
	}, 500);
}

function click0(){
	arrBack[0].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[0].src = `images/p${index[0]}.png`;}, 250);
	open[cnt] = 0;
	cnt ++;
	removeClick(0);
	if(cnt == 2){
		removeAndReset();
	}
}
function click1(){
	arrBack[1].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[1].src = `images/p${index[1]}.png`;}, 250);
	open[cnt] = 1;
	cnt ++;
	removeClick(1);
	if(cnt == 2){
		removeAndReset();
	}
}
function click2(){
	arrBack[2].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[2].src = `images/p${index[2]}.png`;}, 250);
	open[cnt] = 2;
	cnt ++;
	removeClick(2);
	if(cnt == 2){
		removeAndReset();
	}
}
function click3(){
	arrBack[3].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[3].src = `images/p${index[3]}.png`;}, 250);
	open[cnt] = 3;
	cnt ++;
	removeClick(3);
	if(cnt == 2){
		removeAndReset();
	}
}
function click4(){
	arrBack[4].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[4].src = `images/p${index[4]}.png`;}, 250);
	open[cnt] = 4;
	cnt ++;
	removeClick(4);
	if(cnt == 2){
		removeAndReset();
	}
}
function click5(){
	arrBack[5].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[5].src = `images/p${index[5]}.png`;}, 250);
	open[cnt] = 5;
	cnt ++;
	removeClick(5);
	if(cnt == 2){
		removeAndReset();
	}
}
function click6(){
	arrBack[6].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[6].src = `images/p${index[6]}.png`;}, 250);
	open[cnt] = 6;
	cnt ++;
	removeClick(6);
	if(cnt == 2){
		removeAndReset();
	}
}
function click7(){
	arrBack[7].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[7].src = `images/p${index[7]}.png`;}, 250);
	open[cnt] = 7;
	cnt ++;
	removeClick(7);
	if(cnt == 2){
		removeAndReset();
	}
}
function click8(){
	arrBack[8].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[8].src = `images/p${index[8]}.png`;}, 250);
	open[cnt] = 8;
	cnt ++;
	removeClick(8);
	if(cnt == 2){
		removeAndReset();
	}
}
function click9(){
	arrBack[9].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[9].src = `images/p${index[9]}.png`;}, 250);
	open[cnt] = 9;
	cnt ++;
	removeClick(9);
	if(cnt == 2){
		removeAndReset();
	}
}
function click10(){
	arrBack[10].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[10].src = `images/p${index[10]}.png`;}, 250);
	open[cnt] = 10;
	cnt ++;
	removeClick(10);
	if(cnt == 2){
		removeAndReset();
	}
}
function click11(){
	arrBack[11].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[11].src = `images/p${index[11]}.png`;}, 250);
	open[cnt] = 11;
	cnt ++;
	removeClick(11);
	if(cnt == 2){
		removeAndReset();
	}
}
function click12(){
	arrBack[12].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[12].src = `images/p${index[12]}.png`;}, 250);
	open[cnt] = 12;
	cnt ++;
	removeClick(12);
	if(cnt == 2){
		removeAndReset();
	}
}
function click13(){
	arrBack[13].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[13].src = `images/p${index[13]}.png`;}, 250);
	open[cnt] = 13;
	cnt ++;
	removeClick(13);
	if(cnt == 2){
		removeAndReset();
	}
}
function click14(){
	arrBack[14].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[14].src = `images/p${index[14]}.png`;}, 250);
	open[cnt] = 14;
	cnt ++;
	removeClick(14);
	if(cnt == 2){
		removeAndReset();
	}
}
function click15(){
	arrBack[15].style.transform = "rotateY(180deg)";
	setTimeout(function(){arrBack[15].src = `images/p${index[15]}.png`;}, 250);
	open[cnt] = 15;
	cnt ++;
	removeClick(15);
	if(cnt == 2){
		removeAndReset();
	}
}

function addClick( index ){
	switch(index){	
		case 0:
			arrBack[0].addEventListener("click", click0);
		break;
		case 1:
			arrBack[1].addEventListener("click", click1);
		break;
		case 2:
			arrBack[2].addEventListener("click", click2);
		break;
		case 3:
			arrBack[3].addEventListener("click", click3);
		break;
		case 4:
			arrBack[4].addEventListener("click", click4);
		break;
		case 5:
			arrBack[5].addEventListener("click", click5);
		break;
		case 6:
			arrBack[6].addEventListener("click", click6);
		break;
		case 7:
			arrBack[7].addEventListener("click", click7);
		break;
		case 8:
			arrBack[8].addEventListener("click", click8);
		break;
		case 9:
			arrBack[9].addEventListener("click", click9);
		break;
		case 10:
			arrBack[10].addEventListener("click", click10);
		break;
		case 11:
			arrBack[11].addEventListener("click", click11);
		break;
		case 12:
			arrBack[12].addEventListener("click", click12);
		break;
		case 13:
			arrBack[13].addEventListener("click", click13);
		break;
		case 14:
			arrBack[14].addEventListener("click", click14);
		break;
		case 15:
			arrBack[15].addEventListener("click", click15);
		break;
	}
}

function removeClick( index ){
	switch(index){	
		case 0:
			arrBack[0].removeEventListener("click", click0);
		break;
		case 1:
			arrBack[1].removeEventListener("click", click1);
		break;
		case 2:
			arrBack[2].removeEventListener("click", click2);
		break;
		case 3:
			arrBack[3].removeEventListener("click", click3);
		break;
		case 4:
			arrBack[4].removeEventListener("click", click4);
		break;
		case 5:
			arrBack[5].removeEventListener("click", click5);
		break;
		case 6:
			arrBack[6].removeEventListener("click", click6);
		break;
		case 7:
			arrBack[7].removeEventListener("click", click7);
		break;
		case 8:
			arrBack[8].removeEventListener("click", click8);
		break;
		case 9:
			arrBack[9].removeEventListener("click", click9);
		break;
		case 10:
			arrBack[10].removeEventListener("click", click10);
		break;
		case 11:
			arrBack[11].removeEventListener("click", click11);
		break;
		case 12:
			arrBack[12].removeEventListener("click", click12);
		break;
		case 13:
			arrBack[13].removeEventListener("click", click13);
		break;
		case 14:
			arrBack[14].removeEventListener("click", click14);
		break;
		case 15:
			arrBack[15].removeEventListener("click", click15);
		break;
	}
}
