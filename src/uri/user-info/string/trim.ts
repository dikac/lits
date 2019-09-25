import SuffixRemove from "../../string/suffix-remove";

export default function Trim(scheme : string) : string {

    return SuffixRemove(scheme, '@')
}