import ToString from "../../string/to-string";
import IsPort from "./validatable/is-port";

export default class Standard implements ToString{

    private port : number = 0;

    constructor(port : ToString) {

        this.set(port);
    }

    get () : number {

        return this.port;
    }

    set(port : ToString) {

        this.port = IsPort(port).get();
    }

    toString(): string {

        return this.get().toString();
    }
}