import ToString from "../../../string/to-string";
import User from "./user/user";
import Passowrd from "./password/password";

export default interface UserInfo extends ToString
{
    readonly user : User;
    readonly password : Passowrd;
}