import ToString from "../../string/to-string";

let regex = /#.*/;

export default function ParseRfc3986 <Return extends ToString = ToString>
(
    uri : string,
    fragment : (s : string) => Return
) : Return {

    let result = uri.match(regex);

    if(result !== null) {

        let string = result[0].substr(1);
        return  fragment(string);
    }

    return  fragment('');
}
