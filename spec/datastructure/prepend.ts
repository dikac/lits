import PrependInterface from "../../src/datastructure/prepend";
import Length from "../../src/length/length";
import Get from "../../src/datastructure/get";
import First from "../../src/datastructure/first";
import Last from "../../src/datastructure/last";


export default function Prepend<Data>(
    target : PrependInterface<Data> & Iterable<Data> & Length & First<Data>,
    current : Data[],
    prepend : Data[]
) {

    describe(`prepend`, function() {

        it('value before', ()=>expect([...target]).toEqual(current));

        let length = target.length;

        for(let value of prepend) {

            it(`prepend ${value}`, () => target.prepend(value));
            it("length", () => expect(target.length).toBe(++length));
            it("first",  () => expect(target.first()).toBe(value));

        }

        it('length after', ()=>expect(target.length).toEqual(current.length + prepend.length));
        it('value after', ()=>expect([...target]).toEqual([...prepend.reverse(), ...current]));
    });
}
