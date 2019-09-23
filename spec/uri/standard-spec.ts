import FileManager from "../../src/uri/path/file-risky";
import Standard from "../../src/uri/standard";
import Authority from "../../src/uri/authority/standard";
import UserInfo from "../../src/uri/user-info/standard";
import FileRisky from "../../src/uri/path/file-risky";
import Risky from "../../src/uri/value/risky";


it("force console log", () => { spyOn(console, 'log').and.callThrough()});

describe("constructor", function() {

    let mutable = new Standard(
        new Risky('scheme'),
        new Authority(
            new UserInfo(new Risky('user'), new Risky('password')),
            new Risky('host'), new Risky('port')
        ),
        new FileRisky(['path','sub','file'], '/'),
        new Risky('query'),
        new Risky('fragment')
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