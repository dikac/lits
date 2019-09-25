import Path from "./path";
import Sequential from "../../datastructure/sequential";

export default class
        StandardArray extends Sequential<string>
    implements
        Path
{
    private _delimiter !: string;

    constructor(
        private segments : Iterable<string> = [],
        delimiter : string = '/'
    ) {
        super([...segments]);
        this.setDelimiter(delimiter);
    }

    toString(): string {

        return [...this].join(this.delimiter());
    }

    delimiter() : string {

        return this._delimiter;
    }

    setDelimiter(delimiter : string){

        this._delimiter = delimiter;
    }



}