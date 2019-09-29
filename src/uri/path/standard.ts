import Path from "./path";
import Sequential from "../../datastructure/sequential";
import Set from "../../value/set";
import Get from "../../value/get";

export default class
        Standard
    implements
        Path, Set<string>, Get<string>
{
    private _delimiter !: string;
    private _path !: string;

    constructor(
        path : string,
        delimiter : string = '/',
    ) {

        this.setDelimiter(delimiter);
        this.set(path);
    }

    get () : string {

        return this._path;
    }

    set(path : string) {

        this._path = path;
    }

    toString(): string {

        return this._path;
    }

    delimiter() : string {

        return this._delimiter;
    }

    setDelimiter(delimiter : string) {

        this._delimiter = delimiter;
    }

}