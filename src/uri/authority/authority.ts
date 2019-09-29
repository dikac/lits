import ToString from "../../string/to-string";
import UserInfo from "../user-info/user-info";

export default
   interface Authority<
       Ui extends UserInfo = UserInfo,
       H extends ToString = ToString,
       P extends ToString = ToString,
    >
/*   extends ToString*/
{
   userInfo() : Ui;
   port() : P;
   host() : H;
}