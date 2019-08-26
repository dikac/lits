import Validatable from '../validatable/validatable';

export default interface Validator<Arguments extends any[]>  {

    validate(...args : Arguments) : Validatable;

}