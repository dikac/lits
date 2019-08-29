import Range  from '../range';
import Validator  from '../../validator/validator';
import Validatable  from '../../validatable/validatable';
import Primitive  from '../../validatable/primitive';

export default class implements Range, Validator<number> {

    constructor(
        public minimum : number = 0,
        public maximum : number = Infinity
    ) {

    }

    validate(number : number): Validatable {

        return new Primitive(number >= this.minimum && number <= this.maximum);

    }

}