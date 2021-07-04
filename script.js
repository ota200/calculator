var num = document.getElementById("word");
var answer = document.getElementById("words")
var answer_new = document.getElementById("answer")


var bool = true;
var things = [0,0,0];
answer.innerHTML = things

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
	num.value += 0;
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
};

function one() {
	num.value += 1;
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
};

function two() {
	num.value += 2;
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
};

function three() {
	num.value += 3;
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
};
  
function four() {
	num.value += 4;
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
};

function five() {
	num.value += 5;
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
};

function six() {
	num.value += 6;
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
};

function seven() {
	num.value += 7;
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
};

function eight() {
	num.value += 8;
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
	}
};

function nine() {
	num.value += 9;
	if (bool === true){
		things[0] = num.value;
	} else {
		things[2] = num.value;
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

};

function clear(){
	answer.innerHTML = things
	things = [0,0,0]
	bool = true
	num.value = "";
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
	
	answer_new.innerHTML = answer_var

	things = [0,0,0]
	bool = true
	num.value = "";

}