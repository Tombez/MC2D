import * as settings from "settings.js";
import Subchunk from "./Subchunk.js";

export default class Chunk {
	constructor(x) {
		this.x = x;
		this.width = settings.chunkWidth;
		this.height = settings.chunkHeight;
		this.cols = new Array(this.width);
		for (let x = 0; x < this.cols.length; ++x) {
			const col = this.cols[x] = new Array(this.height);
			for (let y = 0; y < this.cols.length; ++y) {
				col[y] = new SubChunk();
			}
		}
	}
}
