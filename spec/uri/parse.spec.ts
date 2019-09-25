import Standard from "../../src/uri/standard";
import Authority from "../../src/uri/authority/standard";
import UserInfo from "../../src/uri/user-info/standard";
import FileRisky from "../../src/uri/path/standard";
import TestDatum from "./map/test-datum";
import Parse from "../../src/uri/parse";
import ParseScheme from "../../src/uri/scheme/parse";
import ParseAuthority from "../../src/uri/authority/parse";
import ParsePath from "../../src/uri/path/parse";
import ParseFragment from "../../src/uri/fragment/parse";
import ParseQuery from "../../src/uri/query/parse";




it("force console log", () => { spyOn(console, 'log').and.callThrough()});

for(let [full, uri] of TestDatum) {

    describe(full, function() {

        let capture =  Parse(
            full,
                u => new ParseScheme(u),
                u => new ParseAuthority(u),
            u => new ParsePath(u),
            u => new ParseQuery(u),
            u => new ParseFragment(u)
        );

        it("scheme", () => expect(capture.scheme().toString()).toBe(uri.scheme().toString()));

        it("user", () => expect(
            capture.authority().userInfo().user().toString()
        ).toBe(
            uri.authority().userInfo().user().toString()
        ));

        it("password", () => expect(
            capture.authority().userInfo().password().toString()
        ).toBe(
            uri.authority().userInfo().password().toString()
        ));

        it("host", () => expect(
            capture.authority().host().toString()
        ).toBe(
            uri.authority().host().toString()
        ));

        it("port", () => expect(
            capture.authority().port().toString()
        ).toBe(
            uri.authority().port().toString()
        ));

        it("path", () => expect(
            capture.path().toString()
        ).toBe(
            uri.path().toString()
        ));

    });
}
