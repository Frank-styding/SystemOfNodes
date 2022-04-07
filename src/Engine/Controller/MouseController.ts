export class MouseController {
  private _x: number = -1;
  private _y: number = -1;
  private _mouseIsDown: boolean = false;
  private _dx: number = 0;
  private _dy: number = 0;

  private _wheelDeltaX: number = 0;
  private _wheelDeltaY: number = 0;

  constructor(canvas: HTMLCanvasElement) {
    canvas.addEventListener("mousedown", this.mouseDown.bind(this));
    canvas.addEventListener("mousemove", this.mouseMove.bind(this));
    canvas.addEventListener("mouseup", this.mouseUp.bind(this));
    canvas.addEventListener("wheel", this.wheel.bind(this));
  }

  private mouseDown(e: MouseEvent): void {
    this._x = e.x;
    this._y = e.y;
    this._mouseIsDown = true;
  }

  private mouseMove(e: MouseEvent): void {
    this._dx = e.x - this._x;
    this._dy = e.y - this._y;
    this._x = e.x;
    this._y = e.y;
  }

  private mouseUp(e: MouseEvent): void {
    this._x = e.x;
    this._y = e.y;
    this._mouseIsDown = false;
  }

  private wheel(e: WheelEvent): void {
    this._wheelDeltaX = e.deltaX;
    this._wheelDeltaY = e.deltaY;
  }

  get deltaX(): number {
    return this._x;
  }

  get deltaY(): number {
    return this._y;
  }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get mouseIsDown(): boolean {
    return this._mouseIsDown;
  }

  get wheelDeltaX(): number {
    return this._wheelDeltaX;
  }

  get wheelDeltaY(): number {
    return this._wheelDeltaY;
  }
}
