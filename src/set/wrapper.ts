
export default class Wrapper <T, Container extends Set<T> = Set<T>> implements Set<T> {

    private $set !: Container;

    constructor(set: Container)
    {
        this.container = set;
    }

    protected set container(container : Container) {

        this.setSet(container);
    }

    protected get container() : Container {

        return this.getSet();
    }

    protected setSet (set : Container) {

        this.$set = set;
    }

    protected getSet () : Container {

        return this.$set;
    }

    [Symbol.iterator](): IterableIterator<T>
    {
        return this.container[Symbol.iterator]();
    }

    entries(): IterableIterator<[T, T]>
    {
        return this.container.entries();
    }

    keys(): IterableIterator<T>
    {
        return this.container.keys();
    }

    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void
    {
        this.container.forEach(callbackfn, thisArg);
    }

    values(): IterableIterator<T>
    {
        return this.container.values();
    }

    add(value: T) : this
    {
        this.container.add(value);
        return this;
    }

    clear(): void
    {
        this.container.clear();
    }

    delete(value: T): boolean
    {
        return this.container.delete(value);
    }

    get [Symbol.toStringTag](): string
    {
        return this.container[Symbol.toStringTag];
    }

    get size(): number
    {
        return this.container.size;
    }

    has(value: T): boolean
    {
        return this.container.has(value);
    }
}

