import { Tip } from "./Tip.js";
import { getTip } from "./TipData.js";

export const TipList = () => {
    const allTips = document.querySelector("#tipList")
    const thetips = getTip();
    let tipHTMLRepresentations = "";
    for (const oneThingFromTips of thetips) {
        tipHTMLRepresentations += Tip(oneThingFromTips);
    }
    console.log("tipHTMLRepresentations", tipHTMLRepresentations);
    allTips.innerHTML = tipHTMLRepresentations;
}