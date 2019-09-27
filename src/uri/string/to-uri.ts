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


export default function ToUri (
    uri :  AuthorityAggregate & SchemeAggregate & PathAggregate & QueryAggregate & FragmentAggregate ,
    scheme : (scheme : ToString) => string = SchemeToUri,
    authority : (v : Authority) => string = (v : Authority) => AuthorityToUri(v, UserInfoToUri),
    path : (v : Path) => string = PathToUri,
    query : (v : ToString) => string = QueryToUri,
    fragment : (v : ToString) => string = FragmentToUri,

) {

    return  scheme(uri.scheme()) + authority(uri.authority()) + path(uri.path()) + query(uri.query()) + fragment(uri.fragment());
}