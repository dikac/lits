import ToString from "../../../string/to-string";
import * as Escape from "escape-string-regexp";
import Validatable from "../../../validatable/validatable";
import Match from "../validatable/match";
import AuthorityAggregate from "../aggregate/authority";
import Authority from "../authority";
import Standard from "../standard";
import StdUserInfo from "../../user-info/standard";
import Split from "../split";

export default class Remove implements ToString, AuthorityAggregate<Standard<StdUserInfo<string, string>, string, string>> {

    private _uri : string;
    private match : Validatable & ToString;

    constructor(
        uri : string,
        matcher : (uri : string) => Validatable & ToString = uri => new Match(uri)
    ) {

        this.match = matcher(uri);

        if(this.match.valid()) {

            this._uri = uri.split(this.match.toString(), 2).join('');

        } else {

            this._uri = uri;
        }

    }

    authority(): Standard<StdUserInfo<string, string>, string, string> {

        return Split(this.match.toString());
    }

    toString(): string {

        return this._uri;
    }
}
//
// export default function Remove(
//     uri : string,
//     matcher : (uri : string) => Validatable & ToString = Match
// ) : string {
//
//     let match = matcher(uri);
//
//     if(match.valid()) {
//
//         return  uri.split(match.toString(), 2).join('');
//
//     } else {
//
//         return uri;
//     }
//
// }