import  Validatable from './validatable';

export default class Primitive implements  Validatable  {

    constructor(
        public boolean : boolean
    ) {

    }

    get valid() : boolean {

        return this.boolean;
    }

}