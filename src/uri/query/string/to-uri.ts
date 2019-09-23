import ToString from "../../../string/to-string";

export default function ToUri(query : ToString) : string {

    let string = query.toString();

    if(string.length > 0) {

        return '?' + string;
    }

    return '';

}