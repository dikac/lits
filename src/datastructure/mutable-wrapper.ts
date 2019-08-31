import Append from "./append";
import Prepend from "./prepend";
import Set from "./set";

export default class
        Array<Data>
    implements
        Set<number, Data>,
        Append<Data>,
        Prepend<Data>
{

    private array : Data[] = [];

    constructor(
        data : Iterable<Data> = [],
    ) {

        for (let value of data) {

            this.append(value);
        }
    }

    *[Symbol.iterator](): Iterator<Data> {

        return this.array;
    }

    last(): Data {

        return this.get(this.length - 1);
    }

    first(): Data {

        return  this.get(0);
    }

    get length() {

        return this.array.length;
    }

    has(identifier: number): boolean {

        return this.array[identifier] !== undefined;
    }

    get(identifier: number): Data {

        let data =  this.array[identifier];

        if(data === undefined) {

            throw new Error('value is not exist')
        }

        return data;
    }

    prepend(data: Data) {

        this.array.unshift(data);
    }

    set length (length : number) {

        this.array.length = length;
    }

    append(data: Data) {

        this.array.push(data);
    }

    set(identifier: number, data: Data) {

        this.array[identifier] = data;
    }

}