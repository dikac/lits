import Get from "./get";
import Set from "./set";
import Identifier from "./identifier";

export default class Wrapper<G, S, I> implements Get<G>, Set<S>, Identifier<I>{

    private value !:  Get<G> & Set<S> & Identifier<I>;

    constructor(
         value :  Get<G> & Set<S> & Identifier<I>
    ) {
        this.setValue(value);
    }

    protected setValue(value :  Get<G> & Set<S> & Identifier<I>) {

        this.value = value;
    }

    protected getValue() :  Get<G> & Set<S> & Identifier<I> {

        return this.value;
    }

    protected getGet() : G{

        return this.value.get;
    }

    protected setSet(set : S) {

        return this.value.set = set;
    }

    protected getIdentifier() : I {

        return this.value.identifier;
    }

    get identifier() : I {

        return this.getIdentifier();
    }

    get get() : G {

        return this.getGet();
    }

    set set(set : S) {

        this.setSet(set);
    }
}