import UserInfo from "../user-info";
import ToUriComponent from "./to-uri-component";

export default function Join(userInfo : UserInfo) : string {

    return ToUriComponent(userInfo.user(), userInfo.password());

}