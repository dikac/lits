export default function ToJsonArray(map : Map<any, any>) : string {

    let array : [string, string][] = [];

    for(let [key, value] of map) {

        array.push([key, value]);
    }

    return JSON.stringify(array);
}