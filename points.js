"use strict";
function point(){
	let firstButton = document.querySelector("#leftPointsButton");
	let secondButton = document.querySelector("#rightPointsButton");
	let SVGleftContainer = document.querySelector("#SVGcontainerLeft");
	let SVGrightContainer = document.querySelector("#SVGcontainerRight");
	
	firstButton.addEventListener("click",addPointsToFirstTeam);
	secondButton.addEventListener("click",addPointsToSecondTeam);

	function addPointsToFirstTeam(){
		let svgField = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		let $circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		let $path = document.createElementNS("http://www.w3.org/2000/svg", "path");

		svgField.setAttribute("width", "8em");
		svgField.setAttribute("height", "8em");
		svgField.setAttribute("class", "eachSVG");
		SVGleftContainer.appendChild(svgField);

		$circle.setAttribute("cx", "3.7em");
		$circle.setAttribute("cy", "3.7em");
		$circle.setAttribute("r", "3.5em");
		$circle.style.fill = "red";
		$circle.style.stroke = "black";
		$circle.style.strokeWidth = ".3em";
		
		$path.setAttribute("d","M20 50 L60 110 L100 20 L57 75 Z");
		$path.style.fill = "#0a0";
		$path.style.stroke = "black";
		$path.style.strokeWidth = ".15em"

		svgField.appendChild($circle);
		svgField.appendChild($path);

		SVGleftContainer.scrollTop = SVGleftContainer.scrollHeight;
	};

	function addPointsToSecondTeam(){
		let svgField = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		let $circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		let $path = document.createElementNS("http://www.w3.org/2000/svg", "path");

		svgField.setAttribute("width", "8em");
		svgField.setAttribute("height", "8em");
		svgField.setAttribute("class", "eachSVG");
		SVGrightContainer.appendChild(svgField);

		$circle.setAttribute("cx", "3.7em");
		$circle.setAttribute("cy", "3.7em");
		$circle.setAttribute("r", "3.5em");
		$circle.style.fill = "red";
		$circle.style.stroke = "black";
		$circle.style.strokeWidth = ".3em";
		
		$path.setAttribute("d","M20 50 L60 110 L100 20 L57 75 Z");
		$path.style.fill = "#0a0";
		$path.style.stroke = "black";
		$path.style.strokeWidth = ".15em"

		svgField.appendChild($circle);
		svgField.appendChild($path);

		SVGrightContainer.scrollTop = SVGrightContainer.scrollHeight;
	};
};
point();
