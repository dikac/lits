import Append from "../append";
import Appends from "./appends";

export default function AppendsSequential <Data> (appendable : Append<Data>, ... values : Data[]) {

    values = values.reverse();
    Appends(appendable, ...values)
}