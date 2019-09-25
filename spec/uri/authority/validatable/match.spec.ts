import TestDatum from "../../map/test-datum";
import Parse from "../../../../src/uri/scheme/parse";
import Match from "../../../../src/uri/authority/validatable/match";
import ToUri from "../../../../src/uri/authority/string/to-uri";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});


for(let [full, uri] of TestDatum) {

    describe(full, function() {

        let capture = Match(full);

        let joined = ToUri(uri.authority());

        it("valid", () => expect(capture.valid()).toBe(ToUri(uri.authority()) !== ''));
        it("equal", () => expect(capture.toString()).toBe(joined));
    });
}