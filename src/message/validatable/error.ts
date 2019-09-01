import Validatable from "../../validatable/validatable";
import Message from "../message";

export default class Error implements Validatable, Message<string> {

    constructor(
        public message: string,
        public valid : boolean
    ) {

    }
}