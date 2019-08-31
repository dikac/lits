import Array from "../../src/datastructure/array";
import ConstructAccessNumber from "./construct-access-number";
import Append from "./append";
import Prepend from "./prepend";

it("force console log", () => { spyOn(console, 'log').and.callThrough();});


describe(`array`, function() {

    // force create copy, no reference
    let raw = () => ['1','2','3'];

    ConstructAccessNumber<string>(new Array<string>(raw()), raw());

    Append<string>( new Array<string>(raw()), raw(), ['4', '5', '6']);

    Prepend<string>(new Array<string>(raw()), raw(), ['-2', '-1', '0']);

});


