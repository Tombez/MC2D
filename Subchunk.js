import Block from "./Block.js";

export default class Subchunk extends Array {
	constructor() {
		super(16);
		for (let x = 0; x < this.length; x++) {
			const col = this[n] = new Array(16);
			for (let y = 0; y < col.length; y++) {
				col[y] = new Block();
			}
		}
	}
}
