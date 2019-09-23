import ToString from "../../string/to-string";
import Validatable from "../../validatable/validatable";
import Beginning from "../../datastructure/beginning";
import Ending from "../../datastructure/ending";
import SplitComponent from "../datastructure/split-component";
import ArrayDs from "../../datastructure/array";
import Edge from "../datastructure/edge";

export default function Capture(source: string, pattern : RegExp) : Edge {

    let match = source.match(pattern);

    if(match !== null) {

        return new Edge(source, match[0], true);
    }

    return new Edge(source);
}

//
//
// implements Validatable, ToString, Edge {
//
//     private _result : string = '';
//     private _valid : boolean = false;
//
//     /**
//      * undefined : has not been parsed
//      * null : has been parsed, but invalid
//      * string : has been parsed, and valid
//      */
//     private component : Edge|undefined;
//
//     constructor(readonly source: string, pattern : RegExp) {
//
//         let match = source.match(pattern);
//
//         if(match !== null) {
//
//             this._result = match[0];
//             this._valid = true;
//         }
//     }
//
// }
//
