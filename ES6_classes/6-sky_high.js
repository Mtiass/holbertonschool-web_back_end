// Implement a class SkyHighBuilding
import Building from './5-building';

export default class SkyHighBuilding extends Building {
    constuctor(sqft, floors) {
        super(sqft);
        if (typeof floors !== 'number') {
            throw new TypeError('floors must be a number');
        }
        this._floors = floors;
    }

    get floors() {
        return this._floors
    }
    
    set floors(nfloors) {
        if (typeof floors !== 'number') {
            throw new TypeError('floors must be a number');
        }
        this._floors = nfloors;
    }

    evacuationWarningMessage() {
        return (`Evacuate slowly the ${this.floors} floors`);
    }
}
