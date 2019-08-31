import Array from "./array";

export default class Sequential<Data> extends Array<Data>
{
    set(identifier: number, data: Data) {

        if(identifier > this.length) {

            throw new Error(`out of range, next index is ${this.length}. given ${identifier}`);
        }

        super.set(identifier, data);
    }

}