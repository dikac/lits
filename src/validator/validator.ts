import Validatable from '../validatable/validatable';

export default interface Validator<Value, Result extends Validatable = Validatable>  {

    validate(value : Value) : Result;

}