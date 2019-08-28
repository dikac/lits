
export default interface Clone <Type>  {

    clone() : Clone<Type> & Type;

}