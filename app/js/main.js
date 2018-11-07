"use strict";

let record0 = [];
let record1 = [];
let record2 = [];
let record3 = [];

function addSoundToRecord(event){
	let recordStatus = document.getElementsByName('recordSwitch')[1].checked;
	let recordTape = parseInt(document.querySelector('input[name="recordChannel"]:checked').value);

	if(recordStatus === true){
		switch (recordTape) {
			case 0 :
				if(record0.length < 10){
					record0.push(event.key);
					addLetterToHTML(record0, document.querySelector("#firstRecord"));
				}
				break;
			case 1 :
				if(record1.length < 10){
					record1.push(event.key);
					addLetterToHTML(record1, document.querySelector("#secondRecord"));
				}
				break;
			case 2 :
				if(record2.length < 10){
					record2.push(event.key);
					addLetterToHTML(record2, document.querySelector("#thridRecord"));
				}
				break;
			case 3 :
				if(record3.length < 10){
					record3.push(event.key);
					addLetterToHTML(record3, document.querySelector("#fourthRecord"));
				}
				break;
		}
	}
}

function addLetterToHTML(array, tapeSelector){
	tapeSelector.innerHTML = array.join().toUpperCase();
}

//bind keys to sounds
document.body.addEventListener('keypress' , (event) =>{
		addSoundToRecord(event);
		switch(event.key){
		case 'q' :
			q();
			break;
		case 'w' :
			w();
			break;
		case 'e' :
			e();
			break;
		case 'r' :
			r();
			break;
		case 'a' :
			a();
			break;
		case 's' :
			s();
			break;
		case 'd' :
			d();
			break;
		case 'f' :
			f();
			break;
	}
})

function q(){
	let q = document.querySelector("#q");
	q.currentTime = 0;
	q.play();
}
function w(){
	let w = document.querySelector("#w");
	w.currentTime = 0;
	w.play();
}
function e(){
	let e = document.querySelector("#e");
	e.currentTime = 0;
	e.play();
}
function r(){
	let r = document.querySelector("#r");
	r.currentTime = 0;
	r.play();
}
function a(){
	let a = document.querySelector("#a");
	a.currentTime = 0;
	a.play();
}
function s(){
	let s = document.querySelector("#s");
	s.currentTime = 0;
	s.play();
}
function d(){
	let d = document.querySelector("#d");
	d.currentTime = 0;
	d.play();
}
function f(){
	let f = document.querySelector("#f");
	f.currentTime = 0;
	f.play();
}
