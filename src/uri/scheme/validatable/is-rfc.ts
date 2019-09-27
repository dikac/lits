import Component from "../../validatable/component";
import SubPatternRfc from "../string/sub-pattern-rfc";

export default function IsRfc(scheme : string) : Component<string> {

    let match =  scheme.match(new RegExp(`^${SubPatternRfc}$`));

    if(match !== null) {

        return new Component<string>(match[0] , true , `given scheme is valid according to rfc3986`);

    } else {

        return new Component<string>('' , false , `given scheme '${scheme}' is not valid according to rfc3986`);
    }
}