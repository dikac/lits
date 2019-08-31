import ToString from "../../string/to-string";
import UserInfo from "./user-info/user-info";
import Host from "./host/host";

export default interface Authority extends ToString
{
   userInfo() : UserInfo;
   port() : Host;
   host() : Number;
}