import { Vector2 } from "./Vertor2";

export class Matrix2 {
  private _data: [number, number, number, number];

  constructor(data: [number, number, number, number] = [1, 0, 0, 1]) {
    this._data = data;
  }

  Mul(m: Matrix2) {
    let d = this._data;
    let d1 = m._data;

    let d2: [number, number, number, number] = [
      d[0] * d1[0] + d[1] * d1[2],
      d[0] * d1[1] + d[1] * d1[3],

      d[2] * d1[0] + d[3] * d1[2],
      d[2] * d1[1] + d[3] * d1[3],
    ];

    this._data = d2;

    return this;
  }

  MulVector2(v: Vector2) {
    return new Vector2(
      this._data[0] * v.x + this._data[1] * v.y,
      this._data[2] * v.x + this._data[3] * v.y
    );
  }

  Identity() {
    this._data = [1, 0, 0, 1];
    return this;
  }

  Rotate(angle: number) {
    let c = Math.cos(angle),
      s = Math.sin(angle);

    return this.Mul(new Matrix2([c, s, -s, c]));
  }

  Scale(x: number, y: number) {
    return this.Mul(new Matrix2([x, 0, 0, y]));
  }

  Transpose() {
    return new Matrix2([
      this._data[0],
      this._data[2],
      this._data[1],
      this._data[3],
    ]);
  }

  Det() {
    return this._data[0] * this._data[2] - this._data[1] * this._data[2];
  }

  Inv() {
    const det = this.Det();
    return new Matrix2([
      this._data[3] / det,
      -this._data[1] / det,
      -this._data[2] / det,
      this._data[0] / det,
    ]);
  }
}
