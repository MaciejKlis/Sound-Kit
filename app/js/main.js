"use strict";

// //array of bind keys
// let bindKeys = ["q", "w", "e", "r", "a", "s", "d", "f"];

//bind keys to sounds
document.body.addEventListener('keypress' , (event) =>{
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
})
