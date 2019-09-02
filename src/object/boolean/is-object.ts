export default function IsObject(value : any) : boolean {

    return typeof value === "object" && value !== null;
}