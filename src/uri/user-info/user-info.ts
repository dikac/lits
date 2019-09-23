import ToString from "../../string/to-string";

export default
    interface UserInfo<
        U extends ToString = ToString,
        P extends ToString = ToString,
    >
/*    extends ToString*/
{
    user() : U;
    password() : P;
}