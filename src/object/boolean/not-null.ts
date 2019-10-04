import Is from "./is";

export default function NotNull(value : any) : value is object {

    return Is(value) && value !== null;
}