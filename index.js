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

document.getElementById("PreReactionTime").addEventListener("click", ()=> {
	document.getElementById("PreReactionTime").classList.remove("ReactionTimeOpen");
	document.getElementById("WaitReactionTime").classList.add("ReactionTimeOpen");
	const a = (Math.random() * 2 + 1) * 1000;
	setTimeout(()=> {
		document.getElementById("WaitReactionTime").classList.remove("ReactionTimeOpen");
		document.getElementById("ClickReactionTime").classList.add("ReactionTimeOpen");
		const starttime = Date.now();
		document.getElementById("ClickReactionTime").addEventListener("click", ()=> {
			const endtime = Date.now();
			document.getElementById("ClickReactionTime").classList.remove("ReactionTimeOpen");
			document.getElementById("ScoreReactionTime").classList.add("ReactionTimeOpen");
			document.getElementById("ScoreReactionTime").innerHTML = `${endtime - starttime}ms`;

		});
		
	}, a);
});