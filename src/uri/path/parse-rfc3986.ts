import ToString from "../../string/to-string";
import Path from "./path";

let regex = /[\/][^?#]*/;

export default function<Return extends Path = Path>
(
    uri : string,
    path : (s : string) => Return
) : Return {

    let result = uri.match(regex);

    if(result !== null) {

        let string = result[0].replace(/[\/]{2}[^\/]*/, '');
        return  path(string);
    }

    return  path('');
}
