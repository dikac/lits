import Pattern from "../regex/pattern";
import StringMatch from "../../../string/validatable/match";

export default function Match(source : string) : StringMatch {

    return new StringMatch(source, Pattern);
}
