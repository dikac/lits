
import ToString from "../../string/to-string";
import pattern from "./string/pattern";
import Ending from "../../datastructure/ending";
import Validatable from "../../validatable/validatable";

let regex = new RegExp(`^${pattern}:`);

export default function ParseRfc3986 <Return extends ToString = ToString>
(uri : string, scheme : (s : string) => Return
) : Return {


    let result = uri.match(regex);

    if(result !== null) {

        let string = result[0].replace(':', '');
        return  scheme(string);
    }

    return  scheme('');
}
