export class KeyboardController {
  private keys: Record<number, boolean> = {};

  constructor(canvas: HTMLCanvasElement) {
    window.addEventListener("keydown", this.keyDown.bind(this));
    window.addEventListener("keypress", this.keyPress.bind(this));
    window.addEventListener("keyup", this.keyUp.bind(this));
  }

  private keyDown(e: KeyboardEvent): void {
    this.keys[e.keyCode] = true;
  }

  private keyPress(e: KeyboardEvent): void {}

  private keyUp(e: KeyboardEvent): void {
    this.keys[e.keyCode] = true;
  }

  is_down(keyCode: number): boolean {
    if (this.keys[keyCode] == undefined) {
      this.keys[keyCode] = false;
      return false;
    }
    return this.keys[keyCode];
  }
}
