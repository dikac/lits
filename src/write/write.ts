export default interface Write<Data, Return = void>  {

    write(data : Data) : Return;
    writable() : boolean;
}