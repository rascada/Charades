function changeName(){
	let changeButton = document.querySelectorAll(".changeTeamNameButton");
	let saveButton = document.querySelectorAll(".saveNameButton");
	let $teamName = document.querySelectorAll(".teamName");
	let $changeInput = document.querySelectorAll(".changeTeamNameInput");

	changeButton[0].addEventListener("click",changeLeftName);
	changeButton[1].addEventListener("click",changeRightName);
	saveButton[0].addEventListener("click",saveLeftName);
	saveButton[1].addEventListener("click",saveRightName);
	function changeLeftName(){
		$teamName[0].style.display = "none";
		changeButton[0].style.display = "none";
		$changeInput[0].style.display = "inline";
		saveButton[0].style.display = "inline";
	};
	function changeRightName(){
		$teamName[1].style.display = "none";
		changeButton[1].style.display = "none";
		$changeInput[1].style.display = "inline";
		saveButton[1].style.display = "inline";
	};
	function saveLeftName(){
		$teamName[0].textContent = $changeInput[0].value;
		$teamName[0].style.display = "inline";
		changeButton[0].style.display = "inline";
		$changeInput[0].style.display = "none";
		saveButton[0].style.display = "none";
	};
	function saveRightName(){
		$teamName[1].textContent = $changeInput[1].value;
		$teamName[1].style.display = "inline";
		changeButton[1].style.display = "inline";
		$changeInput[1].style.display = "none";
		saveButton[1].style.display = "none";
	};
}
changeName();
