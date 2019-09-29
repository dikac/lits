import Standard from "../../src/uri/standard";
import Authority from "../../src/uri/authority/standard";
import UserInfo from "../../src/uri/user-info/standard";
import StdFile from "../../src/uri/path/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

describe("constructor", function() {

    let mutable = new Standard(
       'scheme',
        new Authority(
            new UserInfo('user','password'),
            'host', 'port'
        ),
        new StdFile('path/sub/file', '/'),
        'query',
        'fragment'
    );

    it("scheme", () => expect(mutable.scheme().toString()).toBe('scheme'));
    it("user", () => expect(mutable.authority().userInfo().user().toString()).toBe('user'));
    it("password", () => expect(mutable.authority().userInfo().password().toString()).toBe('password'));
    it("host", () => expect(mutable.authority().host().toString()).toBe('host'));
    it("port", () => expect(mutable.authority().port().toString()).toBe('port'));
    it("query", () => expect(mutable.query().toString()).toBe('query'));
    it("fragment", () => expect(mutable.fragment().toString()).toBe('fragment'));
    it("path", () => expect(mutable.path().toString()).toBe('path/sub/file'));

});