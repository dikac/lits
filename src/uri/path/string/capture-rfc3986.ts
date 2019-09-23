import CaptureScheme from "../../scheme/string/capture-rfc3986";
import CaptureAuthority from "../../authority/string/capture-rfc3986";
import * as escapeStringRegexp from "escape-string-regexp";
import Beginning from "../../../datastructure/beginning";
import Ending from "../../../datastructure/ending";
import Edge from "../../datastructure/edge";

export default class CaptureRfc3986 extends Edge {

    readonly splitter : string;

    constructor(
        source : string,
        separators : string[] = ['/','\\',':']
    ) {

        let original = source;

        // remove scheme
        let scheme = CaptureScheme(source);
        if(scheme.valid()) {
            source = <string>scheme.ending();
        }

        // remove host
        let host = CaptureAuthority(source);
        if(host.valid()) {
            source = <string>host.ending();
        }

        let splitter = escapeStringRegexp(separators.join(''));

        let regex = new RegExp(`^[${splitter}]?[^?#]*`);

        let result = source.match(regex);

        if(result !== null) {

            super(original, result[0], true);

        } else {

            super(original);
        }

        this.splitter = splitter;
    }
}
//
// export default function CaptureRfc3986 (source : string, separators : string[] = ['/','\\',':']) : Edge {
//
//     let original = source;
//
//     // remove scheme
//     let scheme = CaptureScheme(source);
//     if(scheme.valid()) {
//         source = <string>scheme.ending();
//     }
//
//     // remove host
//     let host = CaptureAuthority(source);
//     if(host.valid()) {
//         source = <string>host.ending();
//     }
//
//     let char = escapeStringRegexp(separators.join(''));
//
//     let regex = new RegExp(`^[${char}]?[^?#]*`);
//
//     let result = source.match(regex);
//
//     if(result !== null) {
//
//         return new Edge(original, result[0], true);
//
//     } else {
//
//         return new Edge(original);
//     }
//
//
// }
//type Edge = Beginning<string> & Ending<string>;
//
// export default class CaptureRfc3986 implements Edge {
//
//     private component : Edge|undefined;
//     private _result : string = '';
//     private _valid : boolean = false;
//
//     constructor(readonly source : string, readonly separators : string[]= ['/','\\',':']) {
//
//         // remove scheme
//         let scheme = CaptureScheme(source);
//         if(scheme.valid()) {
//             source = <string>scheme.ending();
//         }
//
//         // remove host
//         let host = CaptureAuthority(source);
//         if(host.valid()) {
//             source = <string>host.ending();
//         }
//
//         let char = escapeStringRegexp(separators.join(''));
//
//         let regex = new RegExp(`^[${char}]?[^?#]*`);
//
//         if(regex !== null) {
//
//             this._result = regex[0];
//             this._valid = true;
//         }
//     }
// }

