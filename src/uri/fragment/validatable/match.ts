import StringMatch from "../../../string/validatable/match";
import Pattern from "../regex/fragment";

export default function Match(source : string) : StringMatch {

    return new StringMatch(source, Pattern);
}
