import Has from "../../src/datastructure/has";
import Get from "../../src/datastructure/get";
import Length from "../../src/length/length";
import Last from "../../src/datastructure/last";
import First from "../../src/datastructure/first";

export default function ConstructAccessNumber<Data>(
    mutable : Get<number, Data> & Length & Has<number> & Last<Data> & First<Data>,
    expectation : Data[]
) {

    describe("construct & getter", function() {

        it("length", () => expect(mutable.length).toBe(3));

        for(let i = 0; i < 3; i++) {

            it("get " + i, () => expect(mutable.has(i)).toBe(true));
            it("has " + i, () => expect(mutable.get(i)).toBe(expectation[i]));
        }

        it("get 4", () => expect(mutable.has(4)).toBe(false));

        try {
            mutable.get(4);
            fail('should throw exception')
        } catch (e) {
            it("has 4", () => expect(e).toBe(e));
        }


        it("last", () => expect(mutable.last()).toBe(expectation.slice(0).pop()));
        it("first", () => expect(mutable.first()).toBe(expectation.slice(0).shift()));
    });
}