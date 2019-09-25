import SubPattern from "../string/sub-pattern";
import Component from "../../validatable/component";

export default function IsScheme(scheme : string) : Component<string> {

    let match =  scheme.match(new RegExp(`^${SubPattern}$`));

    if(match !== null) {

        return new Component<string>(match[0] , true , `given scheme is valid according to rfc3986`);

    } else {

        return new Component<string>('' , false , `given scheme '${scheme}' is not valid according to rfc3986`);
    }
}