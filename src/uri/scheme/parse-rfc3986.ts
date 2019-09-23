
import ToString from "../../string/to-string";
import SubPattern from "./string/sub-pattern";

let regex = new RegExp(`^${SubPattern}:`);

export default function ParseRfc3986
    <Return extends ToString = ToString>
    (uri : string, scheme : (s : string) => Return
) : Return {

    let result = uri.match(regex);

    if(result !== null) {

        let string = result[0].substr(0, result[0].length - 1);
        return  scheme(string);
    }

    return  scheme('');
}
