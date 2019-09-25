import ToString from "../../string/to-string";
import Path from "./path";
import * as escapeStringRegexp from "escape-string-regexp";

import Validatable from "../../validatable/validatable";
import RemoveScheme from "../scheme/string/remove";
import RemoveAuthority from "../authority/string/remove";
import MatchScheme from "../scheme/validatable/match";
import Match from "./validatable/match";


export default class Parse implements Validatable, Path {

    private _valid : boolean = false;
    private path : string = '';

    constructor(
        uri : string,
        private _delimiter : string = '/',
        split = '/\\:'
    ) {

        let match = Match(uri);

        if(match.valid()) {

            let splitter = new RegExp(escapeStringRegexp(split));
            this.path = match.toString().split(splitter).join(this.delimiter());
            this._valid = true;

        }

    }

    toString(): string {

        return this.path;
    }


    delimiter(): string {

        return this._delimiter;
    }

    valid(): boolean {

        return this._valid;
    }


}



// export default function<Return extends Path = Path>
// (
//     uri : string,
//     path : (s : string[]) => Return,
//     separators = ['/','\\',':']
// ) : Return {
//
//     let capture = new CaptureRfc3986(uri, separators);
//
//     if(capture.valid()) {
//
//         let captured = capture.toString().replace(new RegExp(`^[${capture.splitter}]`), '');
//         return  path(captured.split(capture.splitter));
//     }
//
//     return path([]);
// }
