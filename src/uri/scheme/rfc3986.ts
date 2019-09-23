import IsRfc3986 from "./string/boolean/is-rfc3986";
import ToString from "../../string/to-string";

export default function Rfc3986
    <S extends ToString = ToString>
    (scheme : string, factory : (scheme : string) => S)
    : S {


    if(IsRfc3986(scheme)) {

        return factory(scheme);

    } else {

        throw new Error(`given scheme '${scheme}' is not valid according to rfc3986`);
    }
}