import Validatable from "../../validatable/validatable";
import Message from "../message";

export default function Is <Type> (value : any) : value is Message <Type>  {

    if(typeof value !== 'object' || value === null) {

        return false;
    }

    if('message' in value) {

        return true;
    }

    return false;
}