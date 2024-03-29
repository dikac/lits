import ToString from "../../../string/to-string";
import UserInfo from "../../user-info/user-info";
import UserInfoJoin from "../../user-info/string/to-uri";

export default function ToUriComponent(
    userInfo : UserInfo,
    host : ToString,
    port : ToString,
    userInfoToString : (userInfo : UserInfo) => string = UserInfoJoin
) : string {

    let _host = host.toString();

    if(_host.length === 0) {

        return '';
    }

    let _userInfo = userInfoToString(userInfo);

    if(_userInfo.length !== 0) {

        _host = _userInfo + '@' + _host;
    }

    let _port = port.toString();

    if(_port.length !== 0) {

        _host = _host + ':' + _port;
    }

    return '//' + _host;
}