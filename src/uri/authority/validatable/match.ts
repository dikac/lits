import Pattern from "../string/pattern";
import StringMatch from "../../../string/validatable/match";
import Scheme from "../../scheme/aggregate/scheme";
import Remove from "../../scheme/string/remove";
import Validatable from "../../../validatable/validatable";
import ToString from "../../../string/to-string";

export default class Match extends StringMatch implements Scheme<Validatable & ToString> {

    private _scheme : Scheme<Validatable & ToString>;

    constructor(source : string) {

        let scheme = new Remove(source);

        super(scheme.toString(), new RegExp('^' + Pattern));

        this._scheme = scheme;
    }

    scheme(): Validatable & ToString {

        return this._scheme.scheme();
    }
}
