import Vec2 from "./Vec2.js";

export default class Entity extends Vec2 {
	constructor(x, y, w, h) {
		super(x, y);
		this.w = w;
		this.h = h;
	}
	entityCollsion(entity) {
		if (entity.x > this.x && entity.x < this.x + this.w && entity.y > this.y && entity.y < this.y + this.w) {

		}
	}
	blockCollisions() {

	}
}
