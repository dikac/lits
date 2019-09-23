import ToString from "../../../string/to-string";

export default function ToUri(path : ToString) : string {

    let string = path.toString();

    if(string.length > 0) {

        if(string[0] !== this.path().delimiter()) {

            return  this.path().delimiter() + string;

        } else {

            return string;
        }

    }

    return '';

}