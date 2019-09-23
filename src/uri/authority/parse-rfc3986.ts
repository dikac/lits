
import ToString from "../../string/to-string";
import Ending from "../../datastructure/ending";
import Validatable from "../../validatable/validatable";
import UserInfo from "../user-info/user-info";
import Standard from "./standard";
import Authority from "./authority";

let regex = /[/]{2}[^?#/]*/;

export default function ParseRfc3986
<
    U extends UserInfo = UserInfo,
    H extends ToString = ToString,
    P extends ToString = ToString,
>
(
    uri : string,
    userInfo : (user : string, password : string) => U,
    host : (host : string) => H,
    port : (port : string) => P,

) : Authority<U, H, P> {

    let _user : string = '';
    let _password : string = '';
    let _host : string = '';
    let _port : string = '';

    let result = uri.match(regex);

    if(result !== null) {

        let authority = result[0].replace(':', '');

        //check for user info
        if(authority.match(/@/)) {

            let parts = authority.split('@', 2);
            authority = parts[1];

            [_user, _password] = parts[0].split(':', 2);

        }

        let parts = authority.split(':', 2);

        _host = parts[0];

        if(parts[1] !== undefined) {

            _port = parts[0];
        }

    }

    return new Standard<U, H, P>(userInfo(_user, _password), host(_host), port(_port));
}

