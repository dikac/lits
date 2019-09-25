import Ending from "../../datastructure/ending";
import Beginning from "../../datastructure/beginning";
import Validatable from "../../validatable/validatable";

export default class SplitComponent implements Ending<string>, Beginning<string>, Validatable {

    private _beginning : string|undefined = undefined;
    private _ending : string|undefined = undefined;
    private _valid : boolean = false;

    constructor(source : string, splitter : string|RegExp) {

        let parts = source.split(splitter, 2);

        if(parts.length === 2) {

            this._valid = true;
            this._beginning = parts[0];
            this._ending = parts[1];
        }
    }

    valid(): boolean {

        return this._valid;
    }

    beginning(): undefined | string {

        return this._beginning;
    }

    ending(): string | undefined {

        return this._ending;
    }
}