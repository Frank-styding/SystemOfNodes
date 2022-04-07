import { Vector2 } from "./Vertor2";

export class Vector3 {
  private _x: number;
  private _y: number;
  private _z: number;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this._x = x;
    this._y = y;
    this._z = z;
  }

  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }

  add_v(v: Vector3) {
    this._x += v._x;
    this._y += v._y;
    this._z += v._z;
    return this;
  }

  sub_v(v: Vector3) {
    this._x -= v._x;
    this._y -= v._y;
    this._z -= v._z;
    return this;
  }

  mul_v(v: Vector3) {
    this._x *= v._x;
    this._y *= v._y;
    this._z *= v._z;
    return this;
  }

  div_v(v: Vector3) {
    if (v._x == 0 || v._y == 0 || v._z == 0) {
      throw new Error("can divide by 0");
    }

    this._x /= v._x;
    this._y /= v._y;
    this._z /= v._z;
    return this;
  }

  add_v2(v: Vector2) {
    this._x += v.x;
    this._y += v.y;
    return this;
  }

  sub_v2(v: Vector2) {
    this._x -= v.x;
    this._y -= v.y;
    return this;
  }

  mul_v2(v: Vector2) {
    this._x *= v.x;
    this._y *= v.y;
    return this;
  }

  div_v2(v: Vector2) {
    if (v.x == 0 || v.y == 0) {
      throw new Error("Can divide by 0");
    }
    this._x /= v.x;
    this._y /= v.y;
    return this;
  }

  add_s(s: number) {
    this._x += s;
    this._y += s;
    this._z += s;
    return this;
  }

  sub_s(s: number) {
    this._x -= s;
    this._y -= s;
    this._z -= s;
    return this;
  }

  mul_s(s: number) {
    this._x *= s;
    this._y *= s;
    this._z *= s;
    return this;
  }

  div_s(s: number) {
    if (s == 0) {
      throw new Error("can divide by 0");
    }
    this._x /= s;
    this._y /= s;
    this._z /= s;
    return this;
  }

  add(x: number, y: number, z: number) {
    this._x += x;
    this._y += y;
    this._z += z;

    return this;
  }

  sub(x: number, y: number, z: number) {
    this._x -= x;
    this._y -= y;
    this._z -= z;
    return this;
  }

  mul(x: number, y: number, z: number) {
    this._x *= x;
    this._y *= y;
    this._z *= z;
    return this;
  }

  div(x: number, y: number, z: number) {
    if (x == 0 || y == 0) {
      throw new Error("Can divide by 0");
    }

    this._x /= x;
    this._y /= y;
    this._z /= z;
    return this;
  }

  dot(v: Vector3) {
    return this._x * v._x + this._y * v._y + this._z * v._z;
  }

  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
  }

  lengthSQRT() {
    return this._x * this._x + this._y * this._y + this._z * this._z;
  }
}
