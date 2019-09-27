import UpperFirst from "../../src/string/upper-first";
import Trim from "../../src/string/trim";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("trim", function() {


    it(`trim to abcde`, () => expect(Trim('[abcde]', '[]')).toBe('abcde'));
    it(`trim to [abcde]`, () => expect(Trim('([abcde])', '()')).toBe('[abcde]'));
    it(`trim to ([abcde])`, () => expect(Trim('([abcde])', '[]')).toBe('([abcde])'));
    it(`trim to abcde`, () => expect(Trim('([abcde])', '[]()')).toBe('abcde'));
    it(`trim to abcde`, () => expect(Trim('[ ( abcde ) ]', '[]() ')).toBe('abcde'));

});




