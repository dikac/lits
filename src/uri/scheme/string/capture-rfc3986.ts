import SubPattern from "../string/sub-pattern";
import Capture from "../../string/capture";
import Edge from "../../datastructure/edge";

let regex = new RegExp(`^${SubPattern}:`);

export default function CaptureRfc3986 (source : string) : Edge {

    return Capture(source, regex);
}

