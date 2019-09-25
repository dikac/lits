
import StringMatch from "../../../string/validatable/match";
import RemoveScheme from "../../scheme/string/remove";
import RemoveAuthority from "../../authority/string/remove";
import * as escapeStringRegexp from "escape-string-regexp";

export default function Match(
    uri : string,
) : StringMatch {

    uri = RemoveScheme(uri);
    uri = RemoveAuthority(uri);

    let regex = new RegExp(`^[^?#]*`);

    return new StringMatch(uri, regex);
}
