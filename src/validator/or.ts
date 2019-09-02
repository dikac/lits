import Empty from './empty';

export default abstract class <Item> extends Empty {

    validate(booleans: Iterable<boolean>): boolean {

        let bool : boolean|null = null;

        for(bool of booleans) {

            if(bool.valueOf()) {

                return true;
            }
        }

        return bool ? false : this.empty;
    }
}

