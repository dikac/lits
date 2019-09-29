import StringMatch from "../../../string/validatable/match";
import Query from "../regex/query";

export default function Match(source : string) : StringMatch {

    return new StringMatch(source, Query);
}
