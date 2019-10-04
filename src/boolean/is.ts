export default function Is(value : any) : value is boolean {

    return value === true || value === false;
}