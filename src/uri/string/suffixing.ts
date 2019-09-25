import ToString from "../../string/to-string";

export default function Suffixing(fragment : ToString, character : string) : string {

    let string = fragment.toString();

    if(string.length > 0) {

        if(string[string.length - 1] !== character) {

            return string + character;

        } else {

            return string;
        }
    }

    return '';

}