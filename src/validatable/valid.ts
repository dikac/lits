import  Validatable from './validatable';

export default class Valid implements  Validatable  {

    get valid() : boolean {

        return true;
    }

}