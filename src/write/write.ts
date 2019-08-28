export default interface Write<Data, Information = void>  {

    write(data : Data) : Information;
    writable() : boolean;
}