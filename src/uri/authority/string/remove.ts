import ToString from "../../../string/to-string";
import * as Escape from "escape-string-regexp";
import Validatable from "../../../validatable/validatable";
import Match from "../validatable/match";

export default function Remove(
    uri : string,
    matcher : (uri : string) => Validatable & ToString = Match
) : string {

    let match = matcher(uri);

    if(match.valid()) {

        return  uri.split(match.toString(), 2).join('');

    } else {

        return uri;
    }

}