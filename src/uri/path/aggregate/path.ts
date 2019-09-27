import PathInterface from "../path";

export default interface Path<P extends PathInterface = PathInterface> {
    path() : P;
}