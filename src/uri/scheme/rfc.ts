import Stringable from "../../string/value/stringable";
import IsRfc from "./validatable/is-rfc";

export default class Rfc extends Stringable<string> {

    set(set: string) {

        super.set(
            IsRfc(set).get()
        );
    }
}
