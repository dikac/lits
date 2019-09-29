import ToString from "../../string/to-string";
import UserInfo from "../user-info/user-info";
import StdUserInfo from "../user-info/standard";
import Standard from "./standard";
import Match from "./validatable/match";
import Validatable from "../../validatable/validatable";
import Wrapper from "./wrapper";
import Trim from "./validatable/trim";

export default function Split(uri : string) : Standard<StdUserInfo<string, string>, string, string> {

    let standard = new Standard(new StdUserInfo<string, string>('', ''), '', '');

    let authority = Trim(uri);

    //user info
    let parts = authority.split('@', 2);

    if(parts.length === 2) {

        authority = parts[1];

        let userInfo = parts[0].split(':', 2);
        standard.userInfo().setUser(userInfo[0]);
        standard.userInfo().setPassword(userInfo[1]);
    }

    // port
    parts = authority.split(':');

    if(parts.length > 1) {

        standard.setPort(parts.splice(parts.length - 1)[0]);
    }

    standard.setHost(parts.join(':'));


    return standard;

}
//
// export default
//     class Parse
//     extends Standard<StdUserInfo<string, string>, string, string>
//     implements Validatable {
//
//     private _valid : boolean = false;
//
//     constructor(
//         uri : string
//     ) {
//
//         super(new StdUserInfo<string, string>('', ''), '', '');
//
//         let result = new Match(uri);
//
//         if(result.valid()) {
//
//             this._valid = true;
//
//             let authority = Trim(result.toString());
//
//             //user info
//             let parts = authority.split('@', 2);
//
//             if(parts.length === 2) {
//
//                 authority = parts[1];
//
//                 let userInfo = parts[0].split(':', 2);
//                 this.userInfo().setUser(userInfo[0]);
//                 this.userInfo().setPassword(userInfo[1]);
//             }
//
//             // port
//             parts = authority.split(':', 2);
//
//             this.setHost(parts[0]);
//
//             if(parts[1] !== undefined) {
//
//                 this.setPort(parts[1]);
//             }
//
//         }
//     }
//
//
//     valid(): boolean {
//
//         return this._valid;
//     }
//
// }


