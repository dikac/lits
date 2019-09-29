import ToString from "../../../string/to-string";

export default interface Query<Q extends ToString = ToString> {
    query() : Q;
}