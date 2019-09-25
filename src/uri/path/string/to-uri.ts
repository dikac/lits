import ToString from "../../../string/to-string";
import Path from "../path";
import * as Escape from "escape-string-regexp";
import Trim from "./trim";
import TrimPath from "./trim-path";

export default function ToUri(path : Path) : string {

    return path.delimiter() + TrimPath(path);
}