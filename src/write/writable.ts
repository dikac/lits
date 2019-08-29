import Write from "./write";

export default interface Writable<Data, Information = void> extends Write<Data, Information>  {

    writable() : boolean;
}