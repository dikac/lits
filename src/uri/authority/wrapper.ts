import Authority from "./authority";
import ToString from "../../string/to-string";
import UserInfo from "../user-info/user-info";

export default
    class Wrapper<
        Ui extends UserInfo = UserInfo,
        H extends ToString = ToString,
        P extends ToString = ToString,
    >
    implements Authority<Ui, H, P>
{

    constructor(
        private authority : Authority<Ui, H, P>
    ) {

    }

    userInfo() : Ui {

        return this.authority.userInfo();
    }

    port() : P {

        return this.authority.port();
    }

    host() : H {

        return this.authority.host();
    }

}