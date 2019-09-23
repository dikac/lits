import FileManager from "../../../src/uri/path/file-risky";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

describe("construct empty", function() {

    let mutable = new FileManager([]);

    it("name", () => expect(mutable.name()).toBeNull());
    it("ext", () => expect(mutable.extension()).toBeNull());
});

describe("getter path & extension", function() {

    let raw = ['root','path','sub','file.ext'];
    let mutable = new FileManager(raw);

    it("name", () => expect(mutable.name()).toBe('file'));
    it("ext", () => expect(mutable.extension()).toBe('ext'));
});

describe("getter extension", function() {

    let raw = ['root','path','sub','.ext'];
    let mutable = new FileManager(raw);

    it("name", () => expect(mutable.name()).toBeNull());
    it("ext", () => expect(mutable.extension()).toBe('ext'));

});

describe("getter path", function() {

    let raw = ['root','path','sub', 'file'];
    let mutable = new FileManager(raw);

    it("name", () => expect(mutable.name()).toBe('file'));
    it("ext", () => expect(mutable.extension()).toBeNull());
});

describe("mutator path & extension", function() {

    let raw = ['root','path','sub', 'file.ext'];
    let mutable = new FileManager(raw);

    it("change name", () => mutable.setName('changed'));

    it("name", () => expect('changed').toBe(<string> mutable.name()));
    it("extension", () => expect('ext').toBe(<string> mutable.extension()));

    it("change extension", () => mutable.setExtension('png'));
    it("name", () => expect('changed').toBe(<string> mutable.name()));
    it("extension", () => expect('png').toBe(<string> mutable.extension()));


    it("last", () => expect('png').toBe(<string> mutable.extension()));
});


describe("mutator path", function() {

    let raw = ['root','path','sub', 'file'];
    let mutable = new FileManager(raw);

    it("change name", () => mutable.setName('changed'));
    it("name", () => expect(mutable.name()).toBe('changed'));
    it("extension", () => expect(mutable.extension()).toBeNull());

    it("change extension", () => mutable.setExtension('png'));
    it("name", () => expect(mutable.name()).toBe('changed'));
    it("extension", () => expect(mutable.extension()).toBe('png'));

    it("last", () => expect(mutable.ending()).toBe('changed.png'));


});


describe("mutator empty path", function() {

    describe("length 0", function() {
        let raw = ['root','path','sub', 'file.ext'];
        let mutable = new FileManager(raw);

        it("change name", () => mutable.setName(''));
        it("name", () => expect(mutable.name()).toBeNull());
        it("extension", () => expect(mutable.extension()).toBe('ext'));
    });

    describe("undefined", function() {
        let raw = ['root','path','sub', 'file.ext'];
        let mutable = new FileManager(raw);

        it("change name", () => mutable.setName(null));
        it("name", () => expect(mutable.name()).toBeNull());
        it("extension", () => expect(mutable.extension()).toBe('ext'));
    });

});