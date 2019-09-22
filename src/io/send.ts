export default interface Send<Argument, Response>  {

    send(argument : Argument) : Response;
}