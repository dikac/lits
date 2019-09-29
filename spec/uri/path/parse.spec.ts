import Parse from "../../../src/uri/path/parse";
import TestDatum from "../map/test-datum";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

for(let [full, uri] of TestDatum) {

    describe(full, function() {

        let capture = new Parse(full);

        it("valid", () => expect(capture.valid()).toBe(uri.path().toString() !== ''));
        it("equal", () => expect(capture.toString()).toBe(uri.path().toString()));
    });
}
