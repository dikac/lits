import Encode from "../../../src/uri/fragment/encode";
import SubDelimiter from "../../../src/uri/string/sub-delimiter";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("not encoded", function() {

    describe("lower alpha", function() {

        let lower = 'abcdefghijklmnopqrstuvwxyz';
        let encoded = Encode(lower);

        it(`is equal`, () => expect(encoded).toBe(lower));
    });

    describe("upper alpha", function() {

        let lower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let encoded = Encode(lower);

        it(`is equal`, () => expect(encoded).toBe(lower));
    });

    describe("percent encoded", function() {

        let lower = '%FF';
        let encoded = Encode(lower);

        it(`is equal`, () => expect(encoded).toBe(lower));
    });

    describe("sub delimiter", function() {

        let encoded = Encode(SubDelimiter);

        it(`is equal`, () => expect(encoded).toBe(SubDelimiter));
    });
});