
import StandardMap from './wrapper' ;

export default class extends StandardMap<string, string, Map<string, string>> {

    constructor(
        data : string,
        private associative : string,
        private value : string
    ) {

        super(new Map<string, string>());
        this.replace(data);
    }

    replace(data : string) {

        this.clear();

        if(data === undefined) {

            data = '';
        }

        for(let val of data.split(this.value)) {

            let [key, value =  ''] = val.split(this.associative, 2);

            if(key.length) {

                this.set(key, value);
            }
        }
    }

    toString(): string {

        let buffer : string[] = [];

        for(let [key, value] of this) {

            buffer.push(key + this.associative + value);
        }

        return buffer.join(this.value);
    }

}