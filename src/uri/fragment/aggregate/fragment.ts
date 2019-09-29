import ToString from "../../../string/to-string";

export default interface Fragment<Q extends ToString = ToString> {
    fragment() : Q;
}