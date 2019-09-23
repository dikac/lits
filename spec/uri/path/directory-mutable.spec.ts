import DirectoryRisky from "../../../src/uri/path/directory-risky";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("construct & getter", function() {

    let raw = ['root','path','sub'];
    let mutable = new DirectoryRisky(raw);

    it("length", () => expect(mutable.length).toBe(3));

    for(let i = 0; i < 3; i++) {

        it("get " + i, () => expect(mutable.has(i)).toBe(true));
        it("has " + i, () => expect(mutable.get(i)).toBe(raw[i]));
    }

    it("get 4", () => expect(mutable.has(4)).toBe(false));

    try {
        mutable.get(4);
        fail('should throw exception')
    } catch (e) {
        it("has 4", () => expect(e).toBe(e));
    }


    it("last", () => expect(mutable.ending()).toBe('sub'));
    it("first", () => expect(mutable.beginning()).toBe('root'));


    it("toString",
        () => expect(mutable.toString()).toBe('root/path/sub')
    );

});

describe("setter", function() {

    let raw = ['path'];
    let mutable = new DirectoryRisky(raw);

    it("append", () => mutable.append('sub'));
    it("length", () => expect(mutable.length).toBe(2));
    it("get",  () => expect(mutable.get(1)).toBe('sub'));


    it("prepend", () => mutable.prepend('root'));
    it("length prepend", () => expect(mutable.length).toBe(3));
    it("get prepend", () => expect(mutable.get(0)).toBe('root'));
});