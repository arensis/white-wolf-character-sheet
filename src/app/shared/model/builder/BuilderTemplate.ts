import { Builder } from "./Builder";

export abstract class BuilderTemplate<T> implements Builder<T> {
  protected _model: T;

  constructor() {
    this._model = this.defaultData();
  }

  public build(): T {
    return this._model;
  }

  protected abstract defaultData(): T;

  public reset() {
    return this._model = this.defaultData();
  }
}
