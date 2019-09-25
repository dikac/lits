import Pattern from "./regex/fragment";
import ToString from "../../string/to-string";
import Validatable from "../../validatable/validatable";
import Match from "./validatable/match";
import Trim from "./string/trim";


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
// export default function Parse
// <Return extends ToString = ToString>
// (
//     uri : string,
//     fragment : (s : string) => Return
// ) : Return {
//
//     let result = uri.match(Pattern);
//
//     if(result !== null) {
//
//         let string = result[0].substr(1);
//         return  fragment(string);
//     }
//
//     return fragment('');
// }
