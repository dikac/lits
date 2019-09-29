import StringMatch from "../../../string/validatable/match";
import Pattern from "../regex/fragment";

export default function Match(source : string, pattern : RegExp = Pattern) : StringMatch {

    return new StringMatch(source, new RegExp('#' + pattern.source, pattern.flags));
}
