import * as settings from "settings.js";
import Block from "./Block.js";

export default class Subchunk extends Array {
	constructor() {
		super();
		for (let x = 0; x < this.length; x++) {
			const col = this[x] = new Array(16);
			for (let y = 0; y < col.length; y++) {
				col[y] = new Block();
			}
		}
	}
}
