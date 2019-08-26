export default interface Read<Data>  {

    read(data : Data);
    readable() : boolean;
}