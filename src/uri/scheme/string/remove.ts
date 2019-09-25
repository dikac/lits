import ToString from "../../../string/to-string";
import ToUri from "./to-uri";
import * as Escape from "escape-string-regexp";
import Validatable from "../../../validatable/validatable";
import MatchScheme from "../validatable/match";

export default function Remove(
    uri : string,
    matcher : (uri : string) => Validatable & ToString = MatchScheme
) : string {

    let match = matcher(uri);

    if(match.valid()) {

        let escaped = Escape(match.toString());
        return uri.replace(new RegExp(`^${escaped}`), '');

    } else {

        return uri;
    }

}