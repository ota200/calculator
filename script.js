var word = document.getElementById("word");
var num = true;
var things = [0,0,0];

/*function neg_pos(){
	if (num === true){
		word.innerHTML = parseInt(things[0]) * -1;
		console.log(things);
	} else {
		word.innerHTML = parseInt(things[2]) * -1;
		console.log(things);
	}
}*/

function zero() {
	word.innerHTML += 0;
	if (num === true){
		things[0] = word.innerHTML;
		console.log(things);
	} else {
		things[2] = word.innerHTML;
		console.log(things);
	}
};

function one() {
	word.innerHTML += 1;
	if (num === true){
		things[0] = word.innerHTML;
		console.log(things);
	} else {
		things[2] = word.innerHTML;
		console.log(things);
	}
};
 
function two() {
	word.innerHTML += 2;
	if (num === true){
		things[0] = word.innerHTML;
		console.log(things);
	} else {
		things[2] = word.innerHTML;
		console.log(things);
	}
};

function three() {
	word.innerHTML += 3;
	if (num === true){
		things[0] = word.innerHTML;
		console.log(things);
	} else {
		things[2] = word.innerHTML;
		console.log(things);
	}
};

function four() {
	word.innerHTML += 4;
	if (num === true){
		things[0] = word.innerHTML;
		console.log(things);
	} else {
		things[2] = word.innerHTML;
		console.log(things);
	}
};

function five() {
	word.innerHTML += 5;
	if (num === true){
		things[0] = word.innerHTML;
		console.log(things);
	} else {
		things[2] = word.innerHTML;
		console.log(things);
	}
};

function six() {
	word.innerHTML += 6;
	if (num === true){
		things[0] = word.innerHTML;
		console.log(things);
	} else {
		things[2] = word.innerHTML;
		console.log(things);
	}
};

function seven() {
	word.innerHTML += 7;
	if (num === true){
		things[0] = word.innerHTML;
		console.log(things);
	} else {
		things[2] = word.innerHTML;
		console.log(things);
	}
};

function eight() {
	word.innerHTML += 8;
	if (num === true){
		things[0] = word.innerHTML;
		console.log(things);
	} else {
		things[2] = word.innerHTML;
		console.log(things);
	}
};

function nine() {
	word.innerHTML += 9;
	if (num === true){
		things[0] = word.innerHTML;
		console.log(things);
	} else {
		things[2] = word.innerHTML;
		console.log(things);
	}
};


function add(){
	num = false;
	things[1] = " + ";
	word.innerHTML = "";
};

function multi(){
	num = false;
	things[1] = " x ";
	word.innerHTML = "";
};

function sub(){
	num = false;
	things[1] = " - ";
	word.innerHTML = "";
};

function divide(){
	num = false;
	things[1] = " / ";
	word.innerHTML = "";
};


function equal(){
	if (things[1] === (" + ")){
		console.log(parseInt(things[0]) + parseInt(things[2])) 
	};

	if (things[1] === (" - ")){
		console.log(parseInt(things[0]) - parseInt(things[2])) 
	};

	if (things[1] === (" / ")){
		console.log(parseInt(things[0]) / parseInt(things[2])) 
	};

	if (things[1] === (" x ")){
		console.log(parseInt(things[0]) + parseInt(things[2])) 
	};

	things = [0,0,0]
	num = true
	word.innerHTML = "";
}