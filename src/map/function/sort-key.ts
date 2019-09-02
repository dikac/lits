
export default function <Key, Value>(
    map : Map<Key, Value>,
    filter : (key1 : Key, key2 : Key) => number
) : void {

    let keys : Key[] = Array.from(map.keys());

    keys.sort(filter);

    let buffer = new Map<Key, Value>();

    for(let key of keys) {

        let value = map.get(key);

        if(value) {

            buffer.set(key, value);
        }
    }

    map.clear();

    for (let [key, value] of buffer) {

        map.set(key, value);
    }

}

