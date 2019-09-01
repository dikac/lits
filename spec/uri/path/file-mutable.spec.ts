import FileManager from "../../../src/uri/path/file-risky";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

describe("costruct emptyu", function() {

    let mutable = new FileManager([]);

    it("name", () => expect(mutable.name).toBeUndefined());
    it("ext", () => expect(mutable.extension).toBeUndefined());
});

describe("getter path & extension", function() {

    let raw = ['root','path','sub','file.ext'];
    let mutable = new FileManager(raw);

    it("name", () => expect(mutable.name).toBe('file'));
    it("ext", () => expect(mutable.extension).toBe('ext'));
});

describe("getter extension", function() {

    let raw = ['root','path','sub','.ext'];
    let mutable = new FileManager(raw);

    it("name", () => expect(mutable.name).toBeUndefined());
    it("ext", () => expect(mutable.extension).toBe('ext'));
});

describe("getter path", function() {

    let raw = ['root','path','sub', 'file'];
    let mutable = new FileManager(raw);

    it("name", () => expect(mutable.name).toBe('file'));
    it("ext", () => expect(mutable.extension).toBeUndefined());
});

describe("mutator path & extension", function() {

    let raw = ['root','path','sub', 'file.ext'];
    let mutable = new FileManager(raw);

    it("change name", () => mutable.name = 'changed');
    it("name", () => expect(mutable.name).toBe('changed'));
    it("extension", () => expect(mutable.extension).toBe('ext'));

    it("change extension", () => mutable.extension = 'png');
    it("name", () => expect(mutable.name).toBe('changed'));
    it("extension", () => expect(mutable.extension).toBe('png'));


    it("last", () => expect(mutable.extension).toBe('png'));
});


describe("mutator path", function() {

    let raw = ['root','path','sub', 'file'];
    let mutable = new FileManager(raw);

    it("change name", () => mutable.name = 'changed');
    it("name", () => expect(mutable.name).toBe('changed'));
    it("extension", () => expect(mutable.extension).toBeUndefined());

    it("change extension", () => mutable.extension = 'png');
    it("name", () => expect(mutable.name).toBe('changed'));
    it("extension", () => expect(mutable.extension).toBe('png'));

    it("last", () => expect(mutable.last()).toBe('changed.png'));


});


describe("mutator empty path", function() {

    describe("length 0", function() {
        let raw = ['root','path','sub', 'file.ext'];
        let mutable = new FileManager(raw);

        it("change name", () => mutable.name = '');
        it("name", () => expect(mutable.name).toBeUndefined());
        it("extension", () => expect(mutable.extension).toBe('ext'));
    });

    describe("undefined", function() {
        let raw = ['root','path','sub', 'file.ext'];
        let mutable = new FileManager(raw);

        it("change name", () => mutable.name = undefined);
        it("name", () => expect(mutable.name).toBeUndefined());
        it("extension", () => expect(mutable.extension).toBe('ext'));
    });



});