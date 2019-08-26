export default interface Write<Data>  {

    write(data : Data);
    writable() : boolean;
}