import Message from "../../message/message";
import Validatable from "../../validatable/validatable";
import ToString from "../../string/to-string";
import Get from "../../value/get";

export default class Component<Value extends ToString> implements Message<string>, Validatable, ToString, Get<Value> {

    private value : Value;
    private _message : string = 'port is valid';
    private _valid : boolean = false;

    constructor(value : Value, valid : boolean, message : string) {

        this.value = value;
        this._valid = valid;
        this._message = message;
    }

    get () : Value {

        if(!this.valid()) {

            throw new Error(this.message());
        }

        return this.value;
    }

    toString(): string {

        return this.get().toString();
    }

    message(): string {

        return this._message;
    }

    valid(): boolean {

        return this._valid;
    }
}
