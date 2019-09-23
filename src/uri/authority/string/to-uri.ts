import Authority from "../authority";
import JoinComponent from "./join-component";
import UserInfo from "../../user-info/user-info";

export default function ToUri(
    authority : Authority,
    userInfoToString : (userInfo : UserInfo) => string
) : string {

    let string = JoinComponent(
        authority.userInfo(),
        authority.host(),
        authority.port(),
        userInfoToString
    );

    if(string.length > 0) {

        return '//' + string;
    }

    return '';
}