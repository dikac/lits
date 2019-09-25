import ToString from "../../string/to-string";
import Validatable from "../../validatable/validatable";
import Match from "./validatable/match";
import Trim from "./string/trim";

export default class Parse implements ToString, Validatable {

    private scheme : string = '';
    private _valid : boolean = false;

    constructor(uri : string) {

        let match = Match(uri);

        if(match.valid()) {

            this.scheme =  Trim(match.toString());
            this._valid = true;
        }
    }

    valid(): boolean {

        return this._valid;
    }

    toString(): string {

        return this.scheme;
    }

}

