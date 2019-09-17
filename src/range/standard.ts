import Range from './range';

export default class Standard implements Range {

    private _minimum !: number;
    private _maximum !: number;

    constructor(
        minimum : number,
        maximum : number
    ) {
        this.setMaximum(maximum);
        this.setMinimum(minimum);
    }

    setMinimum(minimum: number) {

        this._minimum = minimum;
    }

    setMaximum(maximum: number) {

        this._maximum = maximum;
    }

    minimum() : number {

        return this._minimum;
    }

    maximum() : number {

        return this._maximum;
    }
}