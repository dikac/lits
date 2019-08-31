import Append from "../append";

export default function Appends <Data> (appendable : Append<Data>, ... values : Data[]) {

    for (let value of values) {

        appendable.append(value);
    }
}