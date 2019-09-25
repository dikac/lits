import Uri from "../uri";
import ToString from "../../string/to-string";
import SchemeToUri from "../scheme/string/to-uri";
import PathToUri from "../path/string/to-uri";
import QueryToUri from "../query/string/to-uri";
import FragmentToUri from "../fragment/string/to-uri";
import UserInfoToUri from "../user-info/string/to-uri";
import AuthorityToUri from "../authority/string/to-uri";
import Authority from "../authority/authority";
import Path from "../path/path";

export default function Join (
    uri : Uri,
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