import { KeyboardController } from "./KeyboardController";
import { MouseController } from "./MouseController";

export class Controller {
  private static _mouse: MouseController;
  private static _keyboard: KeyboardController;

  private constructor() {}

  static init(canvas: HTMLCanvasElement): void {
    this._mouse = new MouseController(canvas);
    this._keyboard = new KeyboardController(canvas);
  }

  static get Mouse() {
    return this._mouse;
  }
  static get Keyboard() {
    return this._keyboard;
  }
}
