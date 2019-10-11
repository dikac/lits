import Invalid from "../../../src/validatable/invalid";
import Is from "../../../src/validatable/boolean/is";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("success", function() {
    it("class", () => expect(Is(new Invalid())).toBe(true));
    it("object", () => expect(Is({ valid : () => true})).toBe(true));
});

describe("fail", function() {

    it("class", () => expect(Is(new String())).toBe(false));
    it("object", () => expect(Is({ valid : true})).toBe(false));
});
