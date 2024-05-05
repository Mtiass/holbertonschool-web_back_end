// Implement a class named Building

export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(nsqft) {
    if (typeof nsqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = nsqft;
  }

  evacuationWarningMessage() {
    throw new TypeError("Class extending Building must override evacuationWarningMessage");
  }
}
