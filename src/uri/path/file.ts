import ToString from "../../string/to-string";
import Path from "./path";

export default interface File extends Path {

    readonly extension : string|undefined;
    readonly name : string|undefined;
    readonly file : string|undefined;
}