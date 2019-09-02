import Validator from "./validator";
import Validatable from "../validatable/validatable";
import Append from "../datastructure/append";


export default abstract class
        AbstractCompound <Value, Return extends Validatable = Validatable>
    implements
        Validator<Value, Return>,
        Iterable<Validator<Value, Return>>
{

    constructor(
        public validators : Validator<Value, Return>[] = [],
        public validatables : Validatable & Append<Return>,
        public empty : boolean = false
    ) {
    }

    abstract validate(value: Value) : Return;

    *[Symbol.iterator](): Iterator<Validator<Value, Return>> {

        for(let validator of this.validators) {

            yield validator;
        }
    }

}

