// Implement a class named Currency
export default class Currency {
    constructor(code, name) {
        if (typeof code !== 'string') {
            throw new TypeError('Code must be a string');
        }
        if (typeof name !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._code = code;
        this._name = name;
    }
    get code() {
        return this._code;
    }
    set code(ncode) {
        if (typeof ncode !== 'string') {
            throw new TypeError('Code must be a string');
        }
        this._code = ncode
    }
    get name() {
        return this._name;
    }
    set name(nname) {
        if (typeof nname !== 'string') {
            throw new TypeError('Name must be a string');
        }
        this._name = nname;
    }
    displayFullCurrency() {
        return ('${this._name} (${this._code})');
    }
}
