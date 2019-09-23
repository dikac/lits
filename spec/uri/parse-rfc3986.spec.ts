
import ParseUri from "../../src/uri/parse-rfc3986";
import ParsePath from "../../src/uri/path/parse-rfc3986";
import ParseAuthority from "../../src/uri/authority/parse-rfc3986";
import ParseQuery from "../../src/uri/query/parse-rfc3986";
import ParseFragment from "../../src/uri/fragment/parse-rfc3986";
import ParseScheme from "../../src/uri/scheme/parse-rfc3986";
import Risky from "../../src/uri/value/risky";
import FileRisky from "../../src/uri/path/file-risky";
import UserInfo from "../../src/uri/user-info/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

describe("path only", function() {

    let url = ParseUri('scheme://user:password@host:port/path/sub/file?query#fragment',
        (u : string) => ParseScheme(u, (s : string) => new Risky(s)),
        (u : string) => ParseAuthority(
            u,
            (usr : string, pwd : string) => new UserInfo(usr, pwd),
            (h : string) => new Risky(h),
            (h : string) => new Risky(h),),
        (u : string) =>ParsePath(u, (s : string[]) => new FileRisky(s, '/')),
        (u : string) =>ParseQuery(u, (s : string) => new Risky(s)),
        (u : string) =>ParseFragment(u, (s : string) => new Risky(s))
    );


    it("scheme", () => expect(url.scheme().toString()).toBe('scheme'));
    it("user", () => expect(url.authority().userInfo().user().toString()).toBe('user'));
    it("password", () => expect(url.authority().userInfo().password().toString()).toBe('password'));
    it("host", () => expect(url.authority().host().toString()).toBe('host'));
    it("port", () => expect(url.authority().port().toString()).toBe('port'));
    it("query", () => expect(url.query().toString()).toBe('query'));
    it("fragment", () => expect(url.fragment().toString()).toBe('fragment'));
    it("path", () => expect(url.path().toString()).toBe('path/sub/file'));

});