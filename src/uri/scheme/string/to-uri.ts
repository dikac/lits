import ToString from "../../../string/to-string";
import Suffixing from "../../string/suffixing";

export default function ToUri(scheme : ToString) : string {

    return Suffixing(scheme, ':');

}