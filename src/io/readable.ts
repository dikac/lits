import Read from "./read";

export default interface Readable<Data, Option = void> extends Read<Data>  {

    readable() : boolean;
}