import ToString from "../../string/to-string";

export default interface Path extends ToString
{
    readonly delimiter : string;
}