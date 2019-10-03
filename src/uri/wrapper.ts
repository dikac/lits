import Path from "./path/path";
import Authority from "./authority/authority";
import ToString from "../string/to-string";
import AuthorityAggregate from "./authority/aggregate/authority";
import SchemeAggregate from "./scheme/aggregate/scheme";
import PathAggregate from "./path/aggregate/path";
import QueryAggregate from "./query/aggregate/query";
import FragmentAggregate from "./fragment/aggregate/fragment";

export default
    class Wrapper<
        S extends ToString  = ToString,
        A extends Authority = Authority,
        P extends Path      = Path,
        Q extends ToString  = ToString,
        F extends ToString  = ToString,
    >
    implements
        AuthorityAggregate<A>,
        SchemeAggregate<S>,
        PathAggregate<P>,
        QueryAggregate<Q>,
        FragmentAggregate<F>
{

    private uri !:
        AuthorityAggregate<A> &
        SchemeAggregate<S>&
        PathAggregate<P>&
        QueryAggregate<Q>&
        FragmentAggregate<F>;


    constructor(
        uri :
            AuthorityAggregate<A> &
            SchemeAggregate<S>&
            PathAggregate<P>&
            QueryAggregate<Q>&
            FragmentAggregate<F>
    ) {
        this.setUri(uri);
    }

    protected setUri(
        uri : AuthorityAggregate<A> & SchemeAggregate<S> & PathAggregate<P> & QueryAggregate<Q> & FragmentAggregate<F>
    ) {

        this.uri = uri;
    }

    protected getUri()
        : AuthorityAggregate<A> & SchemeAggregate<S> & PathAggregate<P> & QueryAggregate<Q> & FragmentAggregate<F>
    {

        return this.uri;
    }

    scheme() : S {

        return this.uri.scheme();
    }

    query() : Q {

        return this.uri.query();
    }

    fragment() : F {

        return this.uri.fragment();
    }

    authority() : A {

        return this.uri.authority();
    }

    path() : P {

        return this.uri.path();
    }
 
}