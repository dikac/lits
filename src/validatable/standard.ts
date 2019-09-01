import  Validatable from './validatable';

export default class Standard implements  Validatable  {

    private _boolean : boolean = false;

    constructor(
        boolean : boolean = false
    ) {

        this.setValid(boolean);
    }

    protected setValid(boolean : boolean) {

        this._boolean = boolean;
    }

    get valid() : boolean {

        return this._boolean;
    }

}