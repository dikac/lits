import Validatable from "../validatable";
import NotNull from "../../object/boolean/not-null";

export default function Is (value : any) : value is Validatable  {

    if(!NotNull<Validatable>(value)) {

        return false;
    }

    if(typeof value.valid === 'function') {

        return true;
    }

    return false;
}