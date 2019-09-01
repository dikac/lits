
export default interface Clone <Type>  {

   readonly clone : Clone<Type> & Type;
}