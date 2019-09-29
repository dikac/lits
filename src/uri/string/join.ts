
import ToString from "../../string/to-string";
import SchemeToUri from "../scheme/string/to-uri";
import PathToUri from "../path/string/to-uri";
import QueryToUri from "../query/string/to-uri";
import FragmentToUri from "../fragment/string/to-uri";
import UserInfoToUri from "../user-info/string/to-uri";
import AuthorityToUri from "../authority/string/to-uri";
import Authority from "../authority/authority";
import Path from "../path/path";
import AuthorityAggregate from "../authority/aggregate/authority";
import SchemeAggregate from "../scheme/aggregate/scheme";
import PathAggregate from "../path/aggregate/path";
import QueryAggregate from "../query/aggregate/query";
import FragmentAggregate from "../fragment/aggregate/fragment";

export default function Join<
    S extends ToString  = ToString,
    A extends Authority = Authority,
    P extends Path      = Path,
    Q extends ToString  = ToString,
    F extends ToString  = ToString
    > (
        uri : AuthorityAggregate<A> & SchemeAggregate<S> & PathAggregate<P> & QueryAggregate<Q> & FragmentAggregate<F>,
        schemeToString : (scheme : ToString) => string = SchemeToUri,
        authorityToUri : (v : Authority) => string = (v : Authority) => AuthorityToUri(v, UserInfoToUri),
        pathToUri : (v : Path) => string = PathToUri,
        queryToUri : (v : ToString) => string = QueryToUri,
        fragmentToUri : (v : ToString) => string = FragmentToUri,

) {

    return  schemeToString(uri.scheme()) +
        authorityToUri(uri.authority()) +
        pathToUri(uri.path()) +
        queryToUri(uri.query()) +
        fragmentToUri(uri.fragment());
}