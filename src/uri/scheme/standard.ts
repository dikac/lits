import Stringable from "../../string/value/stringable";
import IsScheme from "./validatable/is-scheme";

export default class Standard extends Stringable<string> {

    set(set: string) {

        super.set(
            IsScheme(set).get()
        );
    }
}
