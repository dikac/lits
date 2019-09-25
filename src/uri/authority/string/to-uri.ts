import UserInfo from "../../user-info/user-info";
import UserInfoJoin from "../../user-info/string/to-uri";
import Authority from "../authority";
import ToUriComponent from "./to-uri-component";

export default function ToUri(
    authority : Authority,
    userInfoToUri : (userInfo : UserInfo) => string = UserInfoJoin
) : string {

    return ToUriComponent(authority.userInfo(), authority.host(), authority.port(), userInfoToUri);
}