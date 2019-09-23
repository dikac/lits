import ToString from "../../string/to-string";
import Path from "./path";

export default interface File extends Path {

    extension() : string|null;
    name() : string|null;
    file() : string|null;
}