import ToUri from "./string/to-uri";
import Stringable from "../../string/value/stringable";
import Query from "./query";


export default class Standard extends Stringable<string> implements Query {

    toString(): string {

        let value = super.toString();
        value = encodeURIComponent(value);
        value = ToUri(value);
        return value;
    }
}


