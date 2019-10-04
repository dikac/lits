export default function Is(value : any) : value is object {

    return typeof value === "object";
}