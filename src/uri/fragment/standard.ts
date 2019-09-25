import ToString from "../../string/to-string";
import Set from "../../value/set";
import Get from "../../value/get";
import Encode from "./encode";
import Decode from "./decoded";


export default class Standard implements Get<string>, Set<ToString>, ToString {

    private fragment : string = '';
    private encoded : string = '';


    constructor(
        fragment : string,
        readonly decoder : (s : string) => string = Encode,
        readonly encoder : (s : string) => string = Decode,
        ) {

        this.set(fragment);
    }

    set (fragment : ToString) {

        this.fragment = this.decoder(fragment.toString());
        this.encoded = this.encoder(this.fragment);
    }

    get () : string {

        return this.fragment;
    }


    toString(): string {

        return this.encoded;
    }
}


