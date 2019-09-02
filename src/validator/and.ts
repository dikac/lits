import AbstractCompound from "./abstract-compound";
import Validatable from "../validatable/validatable";


export default class <Value, Return extends Validatable = Validatable> extends AbstractCompound <Value, Return> {

    validate(value: Value): Return {

        let boolean : boolean|null = null;

        for(let boolean of this.validators) {

            if(!(boolean = boolean.validate(value))) {

                return false;
            }
        }

        return true;

        //return bool ? true : this.empty;
    }
}

