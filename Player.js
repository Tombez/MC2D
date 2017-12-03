import Entity from "./Entity.js";

export default class Player extends Entity {
	constructor(x, y) {
		super(x, y, 1, 2);
	}
}
