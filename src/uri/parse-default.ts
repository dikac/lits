import AuthorityAggregate from "./authority/aggregate/authority";
import SchemeAggregate from "./scheme/aggregate/scheme";
import PathAggregate from "./path/aggregate/path";
import QueryAggregate from "./query/aggregate/query";
import FragmentAggregate from "./fragment/aggregate/fragment";
import ParseScheme from "./scheme/parse";
import ParseAuthority from "./authority/parse";
import ParsePath from "./path/parse";
import ParseQuery from "./query/parse";
import ParseFragment from "./fragment/parse";
import Parse from "./parse";

export default function ParseDefault
(
    uri : string,

) :
    AuthorityAggregate<ParseAuthority> &
    SchemeAggregate<ParseScheme> &
    PathAggregate<ParsePath> &
    QueryAggregate<ParseQuery> &
    FragmentAggregate<ParseFragment>
{

    return Parse(uri,
        u => new ParseScheme(u),
        u => new ParseAuthority(u),
        u => new ParsePath(u),
        u => new ParseQuery(u),
        u => new ParseFragment(u)
    )

}