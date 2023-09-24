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

document.getElementById("ReactionTimeTestPage").addEventListener("click", (event)=> {
	if(state === 2) {
		document.getElementById("ReactionTimeTestPage").innerHTML = `Your reaction time is ${event.timeStamp - startclick}`;
		document.getElementById("ReactionTimeTestPage").style.backgroundColor = "#010409";
		state++;
	
	} else if(state === 1) {
		clearTimeout(b);
		state = 0;
		document.getElementById("ReactionTimeTestPage").style.backgroundColor = "#ce2636";
		document.getElementById("ReactionTimeTestPage").innerHTML = "Too Fast";
	} else if(state === 0) {
		state++;
		document.getElementById("ReactionTimeTestPage").style.backgroundColor = "#ce2636";
		document.getElementById("ReactionTimeTestPage").innerHTML = `Click as fast as you can when you see green`;
		const a = (Math.random() * 2 + 1) * 1000;
		b = setTimeout(()=> {
			state++;
			document.getElementById("ReactionTimeTestPage").innerHTML = ``;
			document.getElementById("ReactionTimeTestPage").style.backgroundColor = "#4bdb6a";
			setTimeout(()=> {
				startclick = performance.now();
			});
		}, a);
	} else if(state === 3) {
		state = 0;
		document.getElementById("ReactionTimeTestPage").style.backgroundColor = "#010409";
		document.getElementById("ReactionTimeTestPage").innerHTML = `Click anywhere to start`;
	}
});