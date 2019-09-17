import  Validatable from './validatable';

export default class Invalid implements  Validatable  {

    valid() : boolean {

        return false;
    }

}