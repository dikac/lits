import Range from './range';

export default class Standard implements Range {

    private _minimum !: number;
    private _maximum !: number;

    constructor(
        minimum : number,
        maximum : number
    ) {
        this._minimum = minimum;
        this._maximum = maximum;

        this.maximum = maximum;
        this.minimum = minimum;
    }

    set minimum(minimum: number) {

        if(minimum > this.maximum) {

            throw new Error('minimum is higher than current maximum')
        }

        this._minimum = minimum;
    }

    set maximum(maximum: number) {

        if(maximum < this.minimum) {

            throw new Error('maximum is lower than current maximum')
        }

        this._maximum = maximum;
    }

    get minimum() : number {

        return this._minimum;
    }

    get maximum() : number {

        return this._maximum;
    }
}