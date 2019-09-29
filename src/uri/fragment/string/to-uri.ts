import ToString from "../../../string/to-string";
import Prefixing from "../../string/prefixing";

export default function ToUri(fragment : ToString) : string {

    return Prefixing(fragment, '#');
}