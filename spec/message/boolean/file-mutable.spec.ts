import Invalid from "../../../src/validatable/invalid";
import IsValidatable from "../../../src/message/boolean/is";
import Error from "../../../src/message/validatable/error";


it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("success", function() {
    it("class", () => expect(IsValidatable(new Error('', true))).toBe(true));
    it("object", () => expect(IsValidatable({message : 'msg'})).toBe(true));
});

describe("fail", function() {

    it("class", () => expect(IsValidatable(new String())).toBe(false));
    it("object", () => expect(IsValidatable({messages : true})).toBe(false));
});
