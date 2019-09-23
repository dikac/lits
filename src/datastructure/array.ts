import Append from "./append";
import Prepend from "./prepend";
import Set from "./set";
import Ending from "./ending";
import Beginning from "./beginning";
import Has from "./has";
import Length from "../length/length";
import Pop from "./pop";
import Shift from "./shift";
import Extract from "./extract";
import Get from "./get";
import ExtractArray from "../array/any/extract";
import Delete from "./delete";


export default class
        Array<Data>
    implements
        Set<number, Data>,
        Get<number, Data>,
        Append<Data>,
        Delete<number>,
        Ending<Data>,
        Beginning<Data>,
        Pop<Data>,
        Shift<Data>,
        Has<number>,
        Prepend<Data>,
        Extract<number, Data>,
        Length,
        Iterable<Data>
{
    constructor(
        private array : Data[] = []
    ) {
    }

    *[Symbol.iterator](): Iterator<Data> {

        for(let value of this.array) {

            yield value;
        }
    }

    delete(identifier: number) {

        this.extract(identifier);
    }

    get lastIndex () : number {

        return this.length - 1;
    }

    shift(): undefined | Data {

        return  this.array.shift();
    }

    pop(): Data | undefined {

        return  this.array.pop();
    }

    ending(): undefined | Data {

        return this.get(this.lastIndex);
    }

    beginning(): Data | undefined {

        return this.get(0);
    }

    extract(index: number): Data | undefined {

        return ExtractArray(this.array, index);
    }

    get(identifier: number): Data | undefined{

        return this.array[identifier];
    }


    set length (length : number) {

        this.array.length = length;
    }

    get length() : number {

        return this.array.length;
    }

    has(identifier: number): boolean {

        return this.array[identifier] !== undefined;
    }

    prepend(data: Data) {

        this.array.unshift(data);
    }


    append(data: Data) {

        this.array.push(data);
    }

    set(identifier: number, data: Data) {

        this.array[identifier] = data;
    }

}