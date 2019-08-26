
export default class Wrapper<K, V, Container extends Map<K, V>> implements Map<K, V> {

    private _map !: Container;

    constructor(
        map: Container
    ) {

        this.map = map;
    }

    protected getMap () : Container {

        return this._map;
    }

    protected setMap (map : Container) {

        this._map = map;
    }

    get map () : Container {

        return this.getMap();
    }

    set map (map : Container) {

        this.setMap(map);
    }



    get [Symbol.toStringTag](): string {

        return this.map[Symbol.toStringTag];
    }

    get size(): number
    {
        return this.map.size;
    }

    has(key: K): boolean
    {
        return this.map.has(key);
    }

    [Symbol.iterator](): IterableIterator<[K, V]>
    {
        return this.map[Symbol.iterator]();
    }

    clear(): void {

        this.map.clear();
    }

    delete(key: K): boolean {

        return this.map.delete(key);
    }

    entries(): IterableIterator<[K, V]> {

        return this.map.entries();
    }

    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void {

        return this.map.forEach(callbackfn, thisArg);
    }

    get(key: K): V | undefined {

        return this.map.get(key);
    }

    keys(): IterableIterator<K> {

        return this.map.keys();
    }

    set(key: K, value: V): this {

        this.map.set(key, value);
        return this;
    }

    values(): IterableIterator<V> {

        return this.map.values();
    }
}