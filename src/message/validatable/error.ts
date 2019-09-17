import Validatable from "../../validatable/validatable";
import Message from "../message";

export default class Error<M> implements Validatable, Message<M> {

    private _message !: M;
    private _valid   !: boolean;

    constructor(
        message : M,
        valid : boolean
    ) {

        this.setValid(valid);
        this.setMessage(message);
    }

    setValid(valid : boolean) {

        this._valid = valid;
    }

    setMessage(message : M) {

        this._message = message;
    }

    message(): M {

        return this._message;
    }

    valid(): boolean {

        return this._valid;
    }
}