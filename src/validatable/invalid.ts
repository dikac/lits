import  Validatable from './validatable';

export default class Invalid implements  Validatable  {

    get valid() : boolean {

        return false;
    }

}