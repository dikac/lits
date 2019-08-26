import  Validatable from './validatable';

export default class implements  Validatable  {

    constructor(
        public boolean : boolean
    ) {

    }

    valid() : boolean {

        return this.boolean;
    }

}