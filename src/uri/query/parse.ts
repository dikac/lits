import ToString from "../../string/to-string";
import Query from "./regex/query";
import Validatable from "../../validatable/validatable";
import Match from "../query/validatable/match";
import Trim from "../query/string/trim";


export default class Parse implements ToString, Validatable {

    private fragment : string = '';
    private _valid : boolean = false;

    constructor(uri : string) {

        let match = Match(uri);

        if(match.valid()) {

            this.fragment = Trim(match.toString());
            this._valid = true;
        }
    }

    valid(): boolean {

        return this._valid;
    }

    toString(): string {

        return this.fragment;
    }

}
//
// export default function Parse <Return extends ToString = ToString>
// (
//     uri : string,
//     query : (s : string) => Return
// ) : Return {
//
//     let result = uri.match(Query);
//
//     if(result !== null) {
//
//         let string = result[0].substr(1);
//         return  query(string);
//     }
//
//     return  query('');
// }
