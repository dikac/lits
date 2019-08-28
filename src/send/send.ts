export default interface Send<Response>  {

    send() : Response;
    sendable() : boolean;
}