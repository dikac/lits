import ToString from "../../../string/to-string";
import * as Escape from "escape-string-regexp";
import Validatable from "../../../validatable/validatable";
import MatchScheme from "../validatable/match";
import Scheme from "../aggregate/scheme";
import StringMatch from "../../../string/validatable/match";

export default class Remove implements Scheme<Validatable & ToString>, ToString {

    private _scheme : Validatable & ToString;
    private uri : string;

    constructor(
        uri : string,
        matcher : (uri : string) => Validatable & ToString = MatchScheme
    ) {

        this._scheme = matcher(uri);

        if(this._scheme.valid()) {

            let escaped = Escape(this._scheme.toString());
            this.uri =  uri.replace(new RegExp(`^${escaped}`), '');

        } else {

            this.uri =  uri;
        }
    }

    scheme(): Validatable & ToString {

        return this._scheme;
    }

    toString(): string {

        return this.uri;
    }
}
//
// export default function Remove(
//     uri : string,
//     matcher : (uri : string) => Validatable & ToString = MatchScheme
// ) : string {
//
//     let match = matcher(uri);
//
//     if(match.valid()) {
//
//         let escaped = Escape(match.toString());
//         return uri.replace(new RegExp(`^${escaped}`), '');
//
//     } else {
//
//         return uri;
//     }
//
// }