import Send from "./send";

export default interface Sendable<Response = void> extends Send<Response> {

    sendable() : boolean;
}