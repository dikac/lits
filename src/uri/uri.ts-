import ToString from "../string/to-string";
import Path from "./path/path";
import Authority from "./authority/authority";

export default
    interface Uri<
        S extends ToString  = ToString,
        A extends Authority = Authority,
        P extends Path      = Path,
        Q extends ToString  = ToString,
        F extends ToString  = ToString,
    >
/*    extends ToString*/
{
    scheme() : S;
    query() : Q;
    fragment() : F;
    authority() : A;
    path() : P;
}