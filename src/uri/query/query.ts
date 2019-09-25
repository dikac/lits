import Get from "../../value/get";
import ToString from "../../string/to-string";

export default interface Query<F extends ToString = ToString> extends ToString, Get<F> {


}