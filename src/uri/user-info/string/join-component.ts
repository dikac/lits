import ToString from "../../../string/to-string";

export default function JoinComponent(user : ToString, password : ToString) : string {

    let _user = user.toString();
    let _password = password.toString();

    if(_user.length > 0 || _password.length > 0) {

        return _user + ':' + _password;
    }

    return '';

}