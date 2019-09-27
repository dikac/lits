import ToString from "../../../string/to-string";

export default interface Port<P extends ToString = ToString> {
    port() : P;
}