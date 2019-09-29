import Match from "../../../../src/uri/path/validatable/match";
import TestDatum from "../../map/test-datum";
import TrimPath from "../../../../src/uri/path/string/trim-path";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

for(let [full, uri] of TestDatum) {

    describe(full, function() {

        let capture = Match(full);

        it("valid", () => expect(capture.valid()).toBe(true));
        it("path", () => expect(capture.toString()).toBe(uri.path().toString()));
    });
}
