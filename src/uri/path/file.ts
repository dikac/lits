import ToString from "../../string/to-string";
import Path from "./path";

export default interface File extends Path {

    extension() : string|undefined;
    name() : string|undefined;
    file() : string|undefined;
}