import Message from "../../../message/message";
import Validatable from "../../../validatable/validatable";
import ToString from "../../../string/to-string";
import Get from "../../../value/get";
import Component from "../../validatable/component";

// @ts-ignore
export default function IsPort(port : ToString) : Component<number> {

    let value = port.toString(undefined);

    let match = value.match(/^[0-9]*$/);

    if(match !== null) {

        let number = parseInt(match[0]);

        if(number <= 65535) {

            // @ts-ignore
            return new Component<number>(number, true, 'port is valid');

        } else {

            // @ts-ignore
            return new Component<number>(0, false, 'given argument more than 65535');
        }

    } else {

        // @ts-ignore
        return new Component<number>(0, false, 'given argument is not numeric');
    }
}
//
// export default class IsPort implements Message<string>, Validatable, ToString, Get<number> {
//
//     private port : number = 0;
//     private _message : string = 'port is valid';
//     private _valid : boolean = false;
//
//     constructor(port : ToString) {
//
//         let value = port.toString(undefined);
//
//         let match = value.match(/^[0-9]*$/);
//
//         if(match !== null) {
//
//             let number = parseInt(match[0]);
//
//             if(number <= 65535) {
//
//                 this.port = number;
//                 this._valid = true;
//
//             } else {
//
//                 this._message = 'given argument more than 65535';
//             }
//
//         } else {
//
//             this._message = 'given argument is not numeric';
//         }
//     }
//
//     get () : number {
//
//         if(!this.valid()) {
//
//             throw new Error(this.message());
//         }
//
//         return this.port;
//     }
//
//     toString(): string {
//
//         return this.get().toString();
//     }
//
//     message(): string {
//
//         return this._message;
//     }
//
//     valid(): boolean {
//
//         return this._valid;
//     }
// }
