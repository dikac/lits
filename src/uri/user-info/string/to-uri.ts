import ToString from "../../../string/to-string";
import UserInfo from "../user-info";
import JoinComponent from "./join-component";

export default function ToUri(userInfo : UserInfo) : string {

    return JoinComponent(userInfo.user(), userInfo.password());

}