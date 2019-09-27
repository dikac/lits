import * as Escape from "escape-string-regexp";

export default function Trim(path : string, delimiters : string = '\\:/') : string {

    if(delimiters.length !== 1) {
        //
        // // TODO Better Message
        // throw new Error('Invalid Delimiter');
    }

    if(path.length > 0) {

        let pattern = Escape(delimiters);

        return  path.replace(new RegExp(`^[${pattern}]*`), '');

    }

    return path;
}