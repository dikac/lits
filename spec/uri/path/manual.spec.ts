import DirectoryManual from "../../../src/uri/path/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe("construct & getter", function() {

    let value = 'root/path/sub';
    let mutable = new DirectoryManual(value);

    it("get", () => expect(mutable.get()).toBe(value));
    it("toString", () => expect(mutable.toString()).toBe(value));

});

describe("construct & setter", function() {

    let value = 'root/path/sub';
    let mutable = new DirectoryManual(value);

    value = 'root-0/path-0/sub-0';
    it("set", () => mutable.set(value));
    it("get", () => expect(mutable.get()).toBe(value));
    it("toString", () => expect(mutable.toString()).toBe(value));
});