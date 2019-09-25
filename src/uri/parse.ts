import Authority from "./authority/authority";
import ToString from "../string/to-string";
import Path from "./path/path";
import Uri from "./uri";
import Standard from "./standard";

export default function Parse
<
    S extends ToString  = ToString,
    A extends Authority = Authority,
    P extends Path      = Path,
    Q extends ToString  = ToString,
    F extends ToString  = ToString
> (
    uri : string,
    scheme : (uri : string) => S,
    authority : (uri : string) => A,
    path : (uri : string) => P,
    query : (uri : string) => Q,
    fragment : (uri : string) => F,
) : Uri<S, A, P, Q, F> {

    return new Standard(scheme(uri), authority(uri), path(uri), query(uri), fragment(uri));
}