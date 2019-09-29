import ToString from "../../../string/to-string";

export default interface Scheme<S extends ToString = ToString> {
    scheme() : S;
}