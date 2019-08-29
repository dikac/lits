export default interface Read<Data, Option = void>  {

    read(data : Option) : Data;
}