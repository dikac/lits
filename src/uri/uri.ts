import ToString from "../string/to-string";
import Path from "./path/path";
import Scheme from "./scheme/scheme";
import Query from "./query/query";
import Authority from "./authority/authority";
import Fragment from "./fragment/fragment";

export default interface Uri extends ToString
{
    readonly scheme : Scheme;
    readonly query : Query;
    readonly fragment : Fragment;
    readonly authority : Authority;
    readonly path : Path;
}