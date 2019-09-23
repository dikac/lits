import UpperFirst from "../../src/string/upper-first";
import strings from "../../src/map/strings";
import UpperWords from "../../src/string/upper-words";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("construct & getter", function() {


    let map : [string, string, string[]][] = [
        ['abcde', 'Abcde', [' ']],
        ['fghij', 'Fghij', [' ']],
        ['abcde fghij', 'Abcde Fghij', [' ']],
        ['abcde fghij+klmno', 'Abcde Fghij+klmno', [' ']],
        ['abcde fghij+klmno', 'Abcde Fghij+Klmno', [' ', '+']],
    ];

    for(let [original, transformed, delimiters] of map) {

        it(`uppercase words ${original}`, () => expect(transformed).toBe(UpperWords(original, delimiters)));
    }

});


