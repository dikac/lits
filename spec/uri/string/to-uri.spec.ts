import Parse from "../../../src/uri/scheme/parse";
import TestDatum from "../map/test-datum";
import ToUri from "../../../src/uri/string/to-uri";
import ToUriRootless from "../../../src/uri/path/string/to-uri-rootless";


it("force console log", () => { spyOn(console, 'log').and.callThrough()});

let rootless : string[] = [
    'path:sub:file.ext'
];

for(let [full, uri] of TestDatum) {

    describe(full, function() {

            if(rootless.includes(full)) {

                it("equal", () => expect(ToUri(
                    uri,
                    undefined, undefined, ToUriRootless
                )).toBe(full));

            } else {

                it("equal", () => expect(ToUri(uri)).toBe(full));
            }
    });
}
