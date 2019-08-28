export default interface Send<Message, Response>  {

    send(data : Message) : Response;
    sendable() : boolean;
}