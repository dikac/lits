import ToString from "../../../string/to-string";
import Prefixing from "../../string/prefixing";

export default function ToUri(query : ToString) : string {

    return Prefixing(query, '?');

}