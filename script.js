var num = document.getElementById("num");//input
var answer = document.getElementById("words")
var answer_new = document.getElementById("answer")// place where answer is put
var history = document.getElementById("history")

var bool = true;
var things = [0,0,0];
var symbols = null;

answer.innerHTML = things

function zero() {
	num.value += 0;
	if (bool === true){
		things[0] = num.value;
		history.innerHTML = things[0];

	} else {
		things[2] = num.value;
		history.innerHTML = things[2];

	}

};
 
function one() {
	num.value += 1;
	if (bool === true){
		things[0] = num.value;
		history.innerHTML = things[0];

	} else {
		things[2] = num.value;
		history.innerHTML = things[2];

	}

};

function two() {
	num.value += 2;
	if (bool === true){
		things[0] = num.value;
		history.innerHTML = things[0];

	} else {
		things[2] = num.value;
		history.innerHTML = things[2];

	}

};

function three() {
	num.value += 3;
	if (bool === true){
		things[0] = num.value;
		history.innerHTML = things[0];

	} else {
		things[2] = num.value;
		history.innerHTML = things[2];

	}

};
function four() {
	num.value += 4;
	if (bool === true){
		things[0] = num.value;
		history.innerHTML = things[0];

	} else {
		things[2] = num.value;
		history.innerHTML = things[2];

	}

};
function five() {
	num.value += 5;
	if (bool === true){
		things[0] = num.value;
		history.innerHTML = things[0];

	} else {
		things[2] = num.value;
		history.innerHTML = things[2];

	}

};

function six() {
	num.value += 6;
	if (bool === true){
		things[0] = num.value;
		history.innerHTML = things[0];

	} else {
		things[2] = num.value;
		history.innerHTML = things[2];

	}

};
function seven() {
	num.value += 7;
	if (bool === true){
		things[0] = num.value;
		history.innerHTML = things[0];

	} else {
		things[2] = num.value;
		history.innerHTML = things[2];

	}

};

function eight() {
	num.value += 8;
	if (bool === true){
		things[0] = num.value;
		history.innerHTML = things[0];

	} else {
		things[2] = num.value;
		history.innerHTML = things[2];

	}

};

function nine() {
	num.value += 9;
	if (bool === true){
		things[0] = num.value;
		history.innerHTML = things[0];

	} else {
		things[2] = num.value;
		history.innerHTML = things[2];

	}

};

function add(){
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
	bool = false;
	things[1] = " + ";
	num.value = "";
	answer.innerHTML = things
	history.innerHTML = things[1];

};

function multi(){
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
	bool = false;
	things[1] = " x ";
	num.value = "";
	answer.innerHTML = things
	history.innerHTML = things[1];

};

function sub(){
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
	bool = false;
	things[1] = " - ";
	num.value = "";
	answer.innerHTML = things
	history.innerHTML = things[1];

};

function divide(){
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	};

	bool = false;
	things[1] = " / ";
	num.value = "";
	answer.innerHTML = things
	history.innerHTML = things[1];

};

function power(){
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	};

	bool = false;
	things[1] = " ^ ";
	num.value = "";
	answer.innerHTML = things

};

function square(){
	if (bool === true){
		things[0] = Math.sqrt(parseFloat(things[0]));
		console.log(things[0]);
		num.value = things[0];
	} else {
		things[2] = Math.sqrt(parseFloat(things[2]));
		console.log(things[2])
		num.value = things[2];
	};
	answer.innerHTML = things;
	
}

function clear(){
	things = [0,0,0]
	bool = true
	num.value = "";
	answer.innerHTML = things

}

function equal(){
	var answer_var = 0

	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	};

	answer.innerHTML = things;

	if (things[1] === (" + ")){
		answer_var = parseFloat(things[0]) + parseFloat(things[2])
	};

	if (things[1] === (" - ")){
		answer_var = parseFloat(things[0]) - parseFloat(things[2])
	};

	if (things[1] === (" / ")){
		answer_var = parseFloat(things[0]) / parseFloat(things[2])
	};

	if (things[1] === (" x ")){
		answer_var = parseFloat(things[0]) * parseFloat(things[2])
	};
	
	answer_new.innerHTML = "Answer: " + answer_var

	things = [0,0,0]
	bool = true
	num.value = "";

}