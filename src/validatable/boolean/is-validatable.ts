import Validatable from "../validatable";

export default function IsValidatable (value : any) : value is Validatable  {

    if(typeof value !== 'object' || value === null) {

        return false;
    }

    if(typeof value.valid === 'function') {

        return true;
    }

    return false;
}