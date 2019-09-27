import ToString from "../../../string/to-string";

export default interface Host<H extends ToString = ToString> {
    host() : H;
}