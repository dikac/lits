import ToString from "../../string/to-string";

export default function Prefixing(fragment : ToString, character : string) : string {

    let string = fragment.toString();

    if(string.length > 0) {

        if(string[0] !== character) {

            return character + string;

        } else {

            return string;
        }
    }

    return '';

}