import ToString from "../../string/to-string";
import Variable from "../../value/variable";

export default class Risky<Value extends ToString = ToString> extends Variable<Value> implements ToString {

    toString(): string {

        return this.get().toString();
    }

}