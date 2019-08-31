import ToString from "../string/to-string";
import Path from "./path/path";
import Scheme from "./scheme/scheme";
import Query from "./query/query";
import Authority from "./authority/authority";
import Fragment from "./fragment/fragment";

export default interface Uri extends ToString
{
    scheme() : Scheme;
    query() : Query;
    fragment() : Fragment;
    authority() : Authority;
    path() : Path;
}