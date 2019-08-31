import AppendInterface from "../../src/datastructure/append";
import Length from "../../src/length/length";
import Get from "../../src/datastructure/get";
import First from "../../src/datastructure/first";
import Last from "../../src/datastructure/last";


export default function Append<Data>(
    target : AppendInterface<Data> & Iterable<Data> & Length & Last<Data>,
    current : Data[],
    append : Data[]
) {

    describe(`append`, function() {

        it('value before', ()=>expect([...target]).toEqual(current));

        let length = target.length;

        for(let value of append) {

            it(`append ${value}`, () => target.append(value));
            it("length", () => expect(target.length).toBe(++length));
            it("first",  () => expect(target.last()).toBe(value));

        }

        it('length after', ()=>expect(target.length).toEqual(current.length + append.length));
        it('value after', ()=>expect([...target]).toEqual([...current, ...append]));
    });
}
