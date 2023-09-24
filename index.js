let x = 0;
const open = ["Logo", "FirstButton", "SecondButton", "ThirdButton"];
const page = ["MainPageHolder", "ReactionTimePageHolder", "SecondButton", "ThirdButton"];
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
