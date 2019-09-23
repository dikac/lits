import FileManager from "../../src/uri/path/file-risky";
import Standard from "../../src/uri/standard";
import Authority from "../../src/uri/authority/standard";
import UserInfo from "../../src/uri/user-info/standard";
import FileRisky from "../../src/uri/path/file-risky";
import Risky from "../../src/uri/value/risky";


it("force console log", () => { spyOn(console, 'log').and.callThrough()});

describe("path only", function() {

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