export default interface Read<Data, Argument = void>  {

    read(data : Argument) : Data;
    readable() : boolean;
}