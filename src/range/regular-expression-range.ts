import Range  from './range';

export default class implements Range {

    protected _minimum !: number;
    protected _maximum !: number;

    constructor(
        minimum : number = 0,
        maximum : number = Infinity
    ) {

        this.minimum = minimum ;
        this.maximum = maximum ;
    }

    set minimum(number : number) {

        if(number === Infinity) {

            throw new Error('minimum number cannot be Infinity');
        }

        this._minimum = number;
    }

    set maximum(number : number) {

        if(number === 0) {

            throw new Error('minimum number cannot be 0');
        }

        this._maximum = number;
    }

    get minimum () : number {

        return this._minimum;
    }

    get maximum () : number {

        return this._maximum;
    }

    toString() {

        let minimum = this.minimum === 0 ? '' : this.minimum;

        let maximum = this.maximum === Infinity ? '' : this.maximum;

        let range = `{${minimum},${maximum}}`;

        if(range === '{,}') {

            return '';

        } else {

            return range;
        }

    }
}