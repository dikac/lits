export default function Nullable<Type>(value : any, is : Callback<Type>) : value is Type|null {
    
    return value === null || is(value);
}

interface Callback<Type> {
    (value : any) : value is Type;
}