export class Vector2 {
  private _x: number;
  private _y: number;

  constructor(x: number, y: number) {
    this._x = x;
    this._y = y;
  }

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }

  add_v(v: Vector2) {
    this._x += v._x;
    this._y += v._y;
    return this;
  }

  sub_v(v: Vector2) {
    this._x -= v._x;
    this._y -= v._y;
    return this;
  }

  mul_v(v: Vector2) {
    this._x *= v._x;
    this._y *= v._y;
    return this;
  }

  div_v(v: Vector2) {
    if (v._x == 0 || v._y == 0) {
      throw new Error("can divide by 0");
    }

    this._x /= v._x;
    this._y /= v._y;
    return this;
  }

  add_s(s: number) {
    this._x += s;
    this._y += s;
    return this;
  }

  sub_s(s: number) {
    this._x -= s;
    this._y -= s;
    return this;
  }

  mul_s(s: number) {
    this._x *= s;
    this._y *= s;
    return this;
  }

  div_s(s: number) {
    if (s == 0) {
      throw new Error("can divide by 0");
    }
    this._x /= s;
    this._y /= s;
    return this;
  }

  add(x: number, y: number) {
    this._x += x;
    this._y += y;
    return this;
  }

  sub(x: number, y: number) {
    this._x -= x;
    this._y -= y;
    return this;
  }

  mul(x: number, y: number) {
    this._x *= x;
    this._y *= y;
    return this;
  }

  div(x: number, y: number) {
    if (x == 0 || y == 0) {
      throw new Error("Can divide by 0");
    }

    this._x /= x;
    this._y /= y;
    return this;
  }

  dot(v: Vector2) {
    return this._x * v._x + this._y * v._y;
  }

  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y);
  }

  lengthSQRT() {
    return this._x * this._x + this._y * this._y;
  }
}
