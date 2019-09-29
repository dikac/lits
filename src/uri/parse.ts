import Authority from "./authority/authority";
import ToString from "../string/to-string";
import Path from "./path/path";
import Standard from "./standard";
import AuthorityAggregate from "./authority/aggregate/authority";
import SchemeAggregate from "./scheme/aggregate/scheme";
import PathAggregate from "./path/aggregate/path";
import QueryAggregate from "./query/aggregate/query";
import FragmentAggregate from "./fragment/aggregate/fragment";

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
) :
    AuthorityAggregate<A> &
    SchemeAggregate<S> &
    PathAggregate<P> &
    QueryAggregate<Q> &
    FragmentAggregate<F> {

    return new Standard(scheme(uri), authority(uri), path(uri), query(uri), fragment(uri));
}