import Sequential from "../../src/datastructure/sequential";
import ConstructAccessNumber from "./construct-access-number";
import Append from "./append";
import Prepend from "./prepend";
import Array from "../../src/datastructure/array";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});

// force create copy, no reference
let raw = () => ['1','2','3'];

let mutable = new Sequential<string>(raw());
ConstructAccessNumber<string>(mutable, raw());


describe(`sequential`, function() {

    Append<string>( mutable, raw(), ['4', '5', '6']);

    Prepend<string>(new Sequential<string>(raw()), raw(), ['-2', '-1', '0']);
});


describe(`direct set`, function() {

    let mutable = new Sequential<string>();
    for(let i = 0; i <= 10; i ++) {

        it('set ' + i, () => mutable.set(i, 'data'));
    }


    for(let i = 11; i <= 20; i ++) {

        try {
            mutable.set(i, 'data');
            fail('exception must thrown');
        } catch (e) {

        }
    }
});
