import ToString from "../../string/to-string";
import Path from "./path";
import * as escapeStringRegexp from "escape-string-regexp";
import CaptureScheme from "../scheme/string/capture-rfc3986";
import CaptureAuthority from "../authority/string/capture-rfc3986";
import CaptureRfc3986 from "./string/capture-rfc3986";

export default function<Return extends Path = Path>
(
    uri : string,
    path : (s : string[]) => Return,
    separators = ['/','\\',':']
) : Return {

    let capture = new CaptureRfc3986(uri, separators);

    if(capture.valid()) {

        let captured = capture.toString().replace(new RegExp(`^[${capture.splitter}]`), '');
        return  path(captured.split(capture.splitter));
    }

    return path([]);
}
