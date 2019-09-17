import Range  from '../range';
import Validator  from '../../validator/validator';
import Validatable  from '../../validatable/validatable';
import Primitive  from '../../validatable/primitive';
import Standard from "../standard";

export default class NumberBetween extends Standard implements Validator<number> {


    validate(number : number): Validatable {

        return new Primitive(number >= this.minimum() && number <= this.maximum());

    }

}