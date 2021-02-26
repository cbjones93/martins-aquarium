console.log("main is loaded");


import { FishList } from "./fish/FishList.js";

FishList();


import { getTip } from './tips/TipData.js';

const allTheTip = getTip()

for (const tip of allTheTip) {
    console.log(tip)
}

import {TipList} from "./tips/TipList.js"
TipList();