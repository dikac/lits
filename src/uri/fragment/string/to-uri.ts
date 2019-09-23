import ToString from "../../../string/to-string";

export default function ToUri(fragment : ToString) : string {

    let string = fragment.toString();

    if(string.length > 0) {

        return '#' + string;
    }

    return '';

}