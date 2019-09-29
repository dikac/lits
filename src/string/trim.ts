import * as Escape from "escape-string-regexp";

export default function Trim(source : string, characters : string) : string {

    characters = Escape(characters);
    return source.replace(new RegExp(`(^[${characters}]*|[${characters}]*$)`, 'g'), '');
}