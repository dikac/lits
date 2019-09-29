import UserInfo from "./user-info";
import ToString from "../../string/to-string";

export default class Standard<
    U extends ToString = ToString,
    P extends ToString = ToString,
    > implements UserInfo<U, P> {

    private _password !: P;
    private _user !: U;

    constructor(user : U, password : P) {

        this.setPassword(password);
        this.setUser(user);
    }

    setPassword(value : P)  {

        this._password = value;
    }

    setUser(value : U)  {

        this._user = value;
    }

    password(): P {

        return this._password;
    }

    user(): U {

        return this._user
    }
}
