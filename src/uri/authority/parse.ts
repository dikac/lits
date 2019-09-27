import ToString from "../../string/to-string";
import UserInfo from "../user-info/user-info";
import StdUserInfo from "../user-info/standard";
import Standard from "./standard";
import Match from "./validatable/match";
import Validatable from "../../validatable/validatable";
import Wrapper from "./wrapper";
import Trim from "./validatable/trim";
import Split from "./split";

export default
    class Parse
    extends Standard<StdUserInfo<string, string>, string, string>
    implements Validatable {

    private _valid : boolean;

    constructor(
        uri : string
    ) {

      //  super(new StdUserInfo<string, string>('', ''), '', '');

        let result = new Match(uri);

        if(result.valid()) {

            let split = Split(result.toString());

            super(split.userInfo(), split.host(), split.port());


            //
            // let authority = Trim(result.toString());
            //
            // //user info
            // let parts = authority.split('@', 2);
            //
            // if(parts.length === 2) {
            //
            //     authority = parts[1];
            //
            //     let userInfo = parts[0].split(':', 2);
            //     this.userInfo().setUser(userInfo[0]);
            //     this.userInfo().setPassword(userInfo[1]);
            // }
            //
            // // port
            // parts = authority.split(':', 2);
            //
            // this.setHost(parts[0]);
            //
            // if(parts[1] !== undefined) {
            //
            //     this.setPort(parts[1]);
            // }

        } else {

            super(new StdUserInfo<string, string>('', ''), '', '');
        }

        this._valid = result.valid();
    }


    valid(): boolean {

        return this._valid;
    }

}


