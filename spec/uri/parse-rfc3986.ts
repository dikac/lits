
import ParseUri from "../../src/uri/parse-rfc3986";
import ParsePath from "../../src/uri/path/parse-rfc3986";
import ParseAuthority from "../../src/uri/authority/parse-rfc3986";
import ParseQuery from "../../src/uri/query/parse-rfc3986";
import ParseFragment from "../../src/uri/fragment/parse-rfc3986";
import ParseScheme from "../../src/uri/scheme/parse-rfc3986";
import Risky from "../../src/uri/value/risky";
import FileRisky from "../../src/uri/path/file-risky";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

describe("path only", function() {


    ParseUri('',
        (u : string) => ParseScheme(u, (s : string) => new Risky(s)),
        (u : string) => ParseAuthority(u),
        (u : string) =>ParsePath(u, (s : string) => new FileRisky(s)),
        (u : string) =>ParseQuery(u, (s : string) => new Risky(s)),
        (u : string) =>ParseFragment(u, (s : string) => new Risky(s))
    );

    let mutable = new Standard(
        new Risky('scheme'),
        new Authority(
            new UserInfo(new Risky('user'), new Risky('password')),
            new Risky('host'), new Risky('port')
        ),
        new FileRisky('/path/sub/file', '/'),
        new Risky('query'),
        new Risky('fragment')
    );

    it("scheme", () => expect('scheme').toBe(mutable.scheme().toString()));
    it("user", () => expect('user').toBe(mutable.authority().userInfo().user().toString()));
    it("password", () => expect('password').toBe(mutable.authority().userInfo().password().toString()));
    it("host", () => expect('host').toBe(mutable.authority().host().toString()));
    it("port", () => expect('port').toBe(mutable.authority().port().toString()));
    it("query", () => expect('query').toBe(mutable.query().toString()));
    it("fragment", () => expect('fragment').toBe(mutable.fragment().toString()));

});