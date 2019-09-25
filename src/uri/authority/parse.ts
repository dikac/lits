import ToString from "../../string/to-string";
import UserInfo from "../user-info/user-info";
import StdUserInfo from "../user-info/standard";
import Standard from "./standard";
import CaptureRfc3986 from "./validatable/match";
import Validatable from "../../validatable/validatable";
import Wrapper from "./wrapper";
import Trim from "./validatable/trim";

export default
    class Parse
    extends Standard<StdUserInfo<string, string>, string, string>
    implements Validatable {

    private _valid : boolean = false;

    constructor(
        uri : string
    ) {

        super(new StdUserInfo<string, string>('', ''), '', '');

        let result = CaptureRfc3986(uri);

        if(result.valid()) {

            this._valid = true;

            let authority = Trim(result.toString());

            //check for user info
            if(authority.match(/@/)) {

                let parts = authority.split('@', 2);
                authority = parts[1];

                let userInfo = parts[0].split(':', 2);
                this.userInfo().setUser(userInfo[0]);
                this.userInfo().setPassword(userInfo[1]);
               // [_user, _password] = parts[0].split(':', 2);
            }

            let parts = authority.split(':', 2);

            this.setHost(parts[0]);

            if(parts[1] !== undefined) {

                this.setPort(parts[1]);
            }
        }
    }


    valid(): boolean {

        return this._valid;
    }

}


