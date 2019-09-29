export default function ToString<V>(iterable : Iterable<V>, delimiter : string) : string {

    return [...iterable].join(delimiter);
}