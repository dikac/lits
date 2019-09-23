import UpperFirst from "../../src/string/upper-first";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("construct & getter", function() {


    let map = new Map<string, string>();
    map.set('abcde', 'Abcde');
    map.set('fghij', 'Fghij');
    map.set('abcde fghij', 'Abcde fghij');


    for(let [original, transformed] of map) {

        it(`uppercase firs ${original}`, () => expect(transformed).toBe(UpperFirst(original)));
    }

});




