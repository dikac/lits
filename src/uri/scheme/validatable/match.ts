import StringMatch from "../../../string/validatable/match";
import SubPattern from "../string/sub-pattern";

export default function Match(source : string) : StringMatch {

    return new StringMatch(source, new RegExp(`^${SubPattern}:`));
}
