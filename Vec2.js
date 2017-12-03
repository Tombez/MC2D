export default class Vec2 {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
	clone() {
		return new Vec2(this.x, this.y);
	}
	add(vec2) {
		this.x += point.x;
		this.y += point.y;
	}
	sum(num) {
		this.x += num;
		this.y += num;
	}
	subtract(vec2) {
		this.x -= point.x;
		this.y -= point.y;
	}
	difference(num) {
		this.x -= num;
		this.y -= num;
	}
	multiply(vec2) {
		this.x *= point.x;
		this.y *= point.y;
	}
	product(num) {
		this.x *= num;
		this.y *= num;
	}
	divide(vec2) {
		this.x /= point.x;
		this.y /= point.y;
	}
	quotient(num) {
		this.x /= num;
		this.y /= num;
	}
	equals(vec2) {
		return this.x == point.x && this.y == point.y;
	}
	projectTo(vec2) {
	   const m = point.y / point.x;
	   const mInverted = 1 / m;
	   this.x = (this.y + this.x * mInverted) / (mInverted + m);
	   this.y = this.x * m;
   }
   distance(vec2) {
	   const difX = this.x - point.x;
	   const difY = this.y - point.y;
	   return Math.sqrt(difX * difX + difY * difY);
   }
   norm() {
	   return Math.hypot(this.x, this.y);
   }
   invert() {
	   this.x *= -1;
	   this.y *= -1;
   }
}
