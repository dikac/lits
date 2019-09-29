import Invalid from "../../../src/validatable/invalid";
import IsValidatable from "../../../src/validatable/boolean/is-validatable";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("success", function() {
    it("class", () => expect(IsValidatable(new Invalid())).toBe(true));
    it("object", () => expect(IsValidatable({ valid : () => true})).toBe(true));
});

describe("fail", function() {

    it("class", () => expect(IsValidatable(new String())).toBe(false));
    it("object", () => expect(IsValidatable({ valid : true})).toBe(false));
});
