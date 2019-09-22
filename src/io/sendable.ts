import Send from "./send";

export default interface Sendable<Argument, Response> extends Send<Argument, Response> {

    sendable() : boolean;
}