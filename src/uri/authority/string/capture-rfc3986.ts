import Pattern from "../regex/pattern";
import Capture from "../../string/capture";
import Edge from "../../datastructure/edge";

export default function CaptureRfc3986 (source : string) : Edge {

    return Capture(source, Pattern);
}


