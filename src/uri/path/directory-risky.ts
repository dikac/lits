import Path from "./path";
import Sequential from "../../datastructure/sequential";

export default class
        DirectoryRisky extends Sequential<string>
    implements
        Path
{

    constructor(
        private segments : string[] = [],
        private _delimiter : string = '/'
    ) {
        super(segments);
    }

    toString(): string {

        return this.segments.join(this.delimiter);
    }

    get delimiter() : string {

        return this._delimiter;
    }

    set delimiter(delimiter : string){

        this._delimiter = delimiter;
    }



}