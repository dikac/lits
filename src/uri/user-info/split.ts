import UserInfo from "./user-info";
import Standard from "./standard";

export default function Split(userInfo : string) : UserInfo<string, string> {

    let parts = userInfo.split(':', 2);

    return new Standard(
        parts[0],
        parts[1] === undefined ? '' : parts[1]
    )
}