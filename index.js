import Block from "./Block.js";
import Entity from "./Entity.js";
import Player from "./Player.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const chunks = new Map();
const mapWidth = 50;
const mapHeight = 8;
for (let x = -mapWidth / 2; x < mapWidth / 2; x++) {
	const chunk = new Array(mapHeight);
	chunks.set(x, chunk);
	for (let y = 0; y < chunk.length; y++) {
		chunk[y] = new SubChunk();
	}
}
for (let n = -5; n < 5; n++) {
	const firstSubchunk = chunks.get(n)[0];
	for (let x = 0; x < firstSubChunk.length; x++) {
		const col = firstSubChunk[x];
		for(let y = 0; y < 4; y++) {
			col[y].id = 1;
		}
		col[4].id = 2;
	}
}
let entities = [];
const player = new Player(0, 20);
entities.push(player);
const resize = () => {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
};
window.addEventListener("resize", resize);
resize();
canvas.addEventListener("mousedown", () => {

});
canvas.addEventListener("mouseup", () => {

});
canvas.addEventListener("keydown", () => {

});
canvas.addEventListener("keyup", () => {

});
const collisions = () => {
	for (let n = 0; n < entities.length; n++) {
		const a = entities[n];
		for (let i = n + 1; i < entities.length; i++) {
			const b = entities[i];
			a.entityCollsion(b);
		}
	}
	for (let a of entities) {
		a.blockCollisions();
	}
};
const draw = () => {

};
const loop = () => {
	collisions();
	draw();
	requestAnimationFrame(loop);
};
requestAnimationFrame(loop);
