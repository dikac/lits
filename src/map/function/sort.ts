

export default function <Key, Value>(
    map : Map<Key, Value>,
    filter : (pair1 : [Key, Value], pair2 : [Key, Value]) => number
) : void {

    let arrays : [Key, Value][] = Array.from(map);

    arrays.sort(filter);

    map.clear();

    for (let [key, value] of arrays) {

        map.set(key, value);
    }

}