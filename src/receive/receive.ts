export default interface Receive<Request>  {

    receive() : Request;
    receivable() : boolean;
}