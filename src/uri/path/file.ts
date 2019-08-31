import ToString from "../../string/to-string";
import Path from "./path";

export default interface File extends Path {

    readonly extension : string|null;
    readonly name : string|null;

}