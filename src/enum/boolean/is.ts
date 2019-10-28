export default function Is<Type>(value : any, type : Type) : value is Type {

    if(!(value in type)) {

        return false;
    }

    return true;

}