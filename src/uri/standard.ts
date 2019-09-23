import Path from "./path/path";
import Authority from "./authority/authority";
import Uri from "./uri";
import ToString from "../string/to-string";

export default
    class Standard<
        S extends ToString  = ToString,
        A extends Authority = Authority,
        P extends Path      = Path,
        Q extends ToString  = ToString,
        F extends ToString  = ToString,
    >
    implements Uri
{

    private _scheme    !: S;
    private _query     !: Q;
    private _fragment  !: F;
    private _authority !: A;
    private _path      !: P;

    constructor(
        scheme : S,
        authority : A,
        path : P,
        query : Q,
        fragment : F,
    ) {
        this.setScheme(scheme);
        this.setQuery(query);
        this.setFragment(fragment);
        this.setAuthority(authority);
        this.setPath(path);
    }

    setScheme(value : S) {

        this._scheme = value;
    }

    setQuery(value : Q) {

        this._query = value;
    }

    setFragment(value : F) {

        this._fragment = value;
    }

    setAuthority(value : A) {

        this._authority = value;
    }

    setPath(value : P) {

        this._path = value;
    }

    scheme() : S {

        return this._scheme;
    }

    query() : Q {

        return this._query;
    }

    fragment() : F {

        return this._fragment;
    }

    authority() : A {

        return this._authority;
    }

    path() : P {

        return this._path;
    }
    //
    // protected schemeString() : string{
    //
    //     let scheme = this.scheme().toString();
    //
    //     if(scheme.length > 0) {
    //
    //         return  scheme + ':';
    //     }
    //
    //     return '';
    // }
    //
    // protected authorityString() : string {
    //
    //     let authority = this.authority().toString();
    //
    //     if(authority.length > 0) {
    //
    //         return '//' + authority;
    //     }
    //
    //     return '';
    // }
    //
    // protected pathString() : string {
    //
    //     let path = this.path().toString();
    //
    //     if(path.length > 0) {
    //
    //         if(path[0] !== this.path().delimiter()) {
    //
    //             return  this.path().delimiter() + path;
    //
    //         } else {
    //
    //             return path;
    //         }
    //
    //     }
    //
    //     return '';
    // }
    //
    // protected fragmentString() : string {
    //
    //     let fragment = this.fragment().toString();
    //
    //     if(fragment.length > 0) {
    //
    //         return '#' + fragment;
    //     }
    //
    //     return '';
    //
    // }
    //
    // protected queryString() : string {
    //
    //     let query = this.query().toString();
    //
    //     if(query.length > 0) {
    //
    //         return '?' + query;
    //     }
    //
    //     return '';
    //
    // }

    // toString(): string {
    //
    //
    //     return SchemeToUri(this.scheme()) +
    //         AuthorityToUri(this.authority()) +
    //         PathToUri(this.path()) + QueryToUri(this.query()) +
    //     // return this.schemeString() +
    //     //     this.authorityString() +
    //     //     this.pathString() +
    //     //     this.queryString() +
    //     //     this.fragmentString();
    // }
}