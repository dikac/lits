import Authority from "./authority";
import ToString from "../../string/to-string";
import UserInfo from "../user-info/user-info";

export default
    class Standard<
        Ui extends UserInfo = UserInfo,
        H extends ToString = ToString,
        P extends ToString = ToString,
    >
    implements Authority<Ui, H, P>
{

    private _userInfo !: Ui;
    private _port !: P;
    private _host !: H;

    constructor(userInfo : Ui, host : H, port : P) {

        this.setUserInfo(userInfo);
        this.setHost(host);
        this.setPort(port);
    }

    setUserInfo(value : Ui)  {

        this._userInfo = value;
    }

    setPort(value : P) {

        this._port = value;
    }

    setHost(value : H) {

        this._host = value;
    }

    userInfo() : Ui {

        return this._userInfo;
    }

    port() : P {

        return this._port;
    }

    host() : H {

        return this._host;
    }

}