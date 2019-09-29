import Path from "../path";
import Trim from "./trim";

export default function TrimPath(path : Path) : string {

    return Trim(path.toString(), path.delimiter());
}