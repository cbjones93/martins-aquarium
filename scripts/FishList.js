import { Fish } from "./Fish.js";
import { getFish } from "./FishData.js"

export const FishList = () => {
	// 1. Get the array of Fish
	const allFishes = getFish();
	// 2. Get a reference to the location on the DOM where you want to display the list of fish
	const DOMLocation = document.querySelector("#fishList");
	// 3. Declare a variable to hold on to fish HTML representations
	let fishHTMLRepresentations = "";
	// 3. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation

	for(const oneThingFromTheSea of allFishes){
		//do something with the oneThingFromTheSea
		fishHTMLRepresentations += Fish(oneThingFromTheSea);
	}
	console.log("fishHTMLRepresentations", fishHTMLRepresentations);

	DOMLocation.innerHTML = fishHTMLRepresentations;

 }