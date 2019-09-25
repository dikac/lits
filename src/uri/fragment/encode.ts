import SubDelimiter from "../string/sub-delimiter";

let allowed : Map<string, string> = new Map<string, string>();

// extra
allowed.set('%3F', '?');
allowed.set('%2F', '/');

// pchar extra
allowed.set('%40', '@');
allowed.set('%3A', ':');

// percent encoded
allowed.set('%25', '%');

// sub delimiter
for (let char of SubDelimiter) {

    allowed.set(encodeURIComponent(char), char);
}

export default function Encode(string : string) : string {

    let encoded = encodeURIComponent(string);

    for(let [search, replace] of allowed) {

        encoded = encoded.replace(search, replace);
    }

    return encoded;
}