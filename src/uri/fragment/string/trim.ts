import PrefixRemove from "../../string/prefix-remove";

export default function Trim(scheme : string) : string {

    return PrefixRemove(scheme, '#');
}