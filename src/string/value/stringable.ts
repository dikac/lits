import ToString from "../../string/to-string";
import Variable from "../../value/variable";

export default class Stringable<Value extends ToString = ToString> extends Variable<Value> implements ToString {

    constructor(
        value : Value
    ) {

        super(value);
    }

    toString(): string {

        return this.get().toString();
    }

}