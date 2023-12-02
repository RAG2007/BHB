let x = 0;
const open = ["Logo", "FirstButton", "SecondButton", "ThirdButton"];
const page = ["MainPageHolder", "ReactionTimePageHolder", "WritingTestPageHolder", "ThirdButton"];
for(let i = 0; i < 4; i++) {
	document.getElementById(open[i]).addEventListener("click", ()=> {
		document.getElementById(page[x]).classList.remove("open");
		document.getElementById(page[i]).classList.add("open");
		x = i;
	});
}

let state = 0;
let startclick;
let b;
const element = document.getElementById("ReactionTimeTestPage");
element.addEventListener("mousedown", (event)=> {
	const ReactionTime = event.timeStamp - startclick;
	if(state === 2) {
		element.style.backgroundColor = "#010409";
		element.innerHTML = `Your reaction time is ${ReactionTime}`;
		state++;
	
	} else if(state === 1) {
		clearTimeout(b);
		state = 0;
		element.style.backgroundColor = "#ce2636";
		element.innerHTML = "Too Fast";
	} else if(state === 0) {
		state++;
		element.style.backgroundColor = "#ce2636";
		element.innerHTML = `Click as fast as you can when you see white`;
		let a = (Math.random() * 3 + 1) * 1000;
		b = setTimeout(()=> {
			element.style.backgroundColor = "#ffffff";
			state++;
			element.innerHTML = ``;
			setTimeout(()=> {
				element.offsetWidth;
				startclick = performance.now();
			});
		}, a);
	} else if(state === 3) {
		state = 0;
		element.style.backgroundColor = "#010409";
		element.innerHTML = `Click anywhere to start`;
	}
});
const easy = "o validate the statements and conclusions in your work by providing directions to other sound sources that support and verify them.";
let a = easy.split(' ');
let all = 0;
for(let i = 0; i < a.length; i++) {
	let current = a[i];
	const NewWord = document.createElement("word");
	NewWord.id = `word${i}`;
	NewWord.className = `word`;
	document.getElementById("WritingTestPage").appendChild(NewWord);
	for(let a = 0; a < current.length; a++) {
		const NewLetter = document.createElement("letter");
		NewLetter.id = `letter${all}`;
		NewLetter.className = `letter`;
		NewLetter.innerHTML = current[a];
		document.getElementById(`word${i}`).appendChild(NewLetter);
		all++;
	}
	if(i < a.length - 1) {
		const NewLetter = document.createElement("letter");
		NewLetter.id = `letter${all}`;
		NewLetter.className = `letter`;
		NewLetter.innerHTML = ` `;
		document.getElementById(`word${i}`).appendChild(NewLetter);
		all++;
	}
}
let index = 0;
let first = 0;
let firstTime = 0;
let done = 0;
let nacc = 0;
document.getElementById("WritingTestPageHolder").addEventListener("keydown", (event) => {
	document.getElementById("WritingTestResults").style.display = "none";
	document.getElementById("WritingTestPage").style.display = "block";
	event.preventDefault();
	if(done === 0) {
		if (event.key === easy[index] ) {
			if(first === 0) {
				window.getSelection().getRangeAt(0).setStart(document.getElementById(`letter0`), 0);
				window.getSelection().getRangeAt(0).setEnd(document.getElementById(`letter0`), 0);
				firstTime = Date.now();
				first = 1;
				done = 0;
			}
			if(index === easy.length - 1) {
				const yourtime = Date.now() - firstTime;
				document.getElementById("WritingTestResults").innerHTML = `Your typing speed is ${(a.length / (yourtime  / 1000) * 60).toFixed(2)} WPM with an accuracy of ${((easy.length) / (easy.length + nacc) * 100).toFixed(2)}%`;
				document.getElementById("WritingTestResults").style.display = "block";
				document.getElementById("WritingTestPage").style.display = "none";
				index = 0;
				first = 0;
				done = 1;
				nacc = 0;
				for(let i = 0; i < easy.length; i++) {
					document.getElementById(`letter${i}`).classList.remove(`letterdone`);
				}
				return;
			}
			document.getElementById(`letter${index}`).classList.add(`letterdone`);
			let x = window.getSelection().getRangeAt(0);
			if(index + 1 < easy.length) {
				x.setStart(document.getElementById(`letter${index + 1}`), 0);
				x.setEnd(document.getElementById(`letter${index + 1}`), 0);
			}
			index++;
		} else {
			if(((event.key >= 'A' && event.key <= 'z') || event.key === '.' || event.key === ',' || event.key === ':' || event.key === ';') && !event.shiftKey) {
				nacc++;
			}
		}
	}
	done = 0;
});
