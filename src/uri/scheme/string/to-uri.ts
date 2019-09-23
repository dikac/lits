import ToString from "../../../string/to-string";

export default function ToUri(scheme : ToString) : string {

    let string = scheme.toString();

    if(string.length > 0) {

        return string + ':';
    }

    return '';

}