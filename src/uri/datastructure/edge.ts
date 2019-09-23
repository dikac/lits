import ToString from "../../string/to-string";
import Validatable from "../../validatable/validatable";
import Beginning from "../../datastructure/beginning";
import Ending from "../../datastructure/ending";
import SplitComponent from "../datastructure/split-component";
import ArrayDs from "../../datastructure/array";

type BeginEnd = Beginning<string> & Ending<string>;

export default class Edge implements Validatable, ToString, BeginEnd {

    /**
     * undefined : has not been parsed
     * null : has been parsed, but invalid
     * string : has been parsed, and valid
     */
    private component : BeginEnd|undefined;

    constructor(
        readonly source: string,
        private result : string = '',
        private _valid : boolean = false
    ) {

    }

    private getComponent() : BeginEnd {

        if(this.component === undefined) {

            if(this.valid()) {

                this.component = new SplitComponent(this.source, this.toString());

            } else {

                this.component = new ArrayDs();
            }
        }

        return this.component;

    }

    ending(): string | undefined {

        return  this.getComponent().ending();
    }

    beginning(): undefined | string {

        return  this.getComponent().beginning();
    }

    valid() : boolean {

        return this._valid;
    }

    toString(): string {

        return this.result;
    }

}

