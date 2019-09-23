import ToString from "../../string/to-string";

let regex = /\?[^#]*/;

export default function ParseRfc3986 <Return extends ToString = ToString>
(
    uri : string,
    query : (s : string) => Return
) : Return {

    let result = uri.match(regex);

    if(result !== null) {

        let string = result[0].substr(1);
        return  query(string);
    }

    return  query('');
}
