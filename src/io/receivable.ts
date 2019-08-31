import Receive from "./receive";

export default interface Receivable<Request> extends Receive<Request>  {

    receivable() : boolean;
}