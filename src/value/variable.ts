import Get from "./get";
import Set from "./set";
import Identifier from "./identifier";

export default class Variable<Value> implements Get<Value>, Set<Value>{

    private value !:  Value;

    constructor(
         value :  Value
    ) {
        this.set(value);
    }

    get() : Value {

        return this.value;
    }

    set(set : Value) {

        this.value = set;
    }

}