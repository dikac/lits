export default function PrefixRemove(source : string, character : string) : string {

    if(source.length !== 0) {

        if(source[0] === character) {

            return source.substr(1);
        }
    }

    return source;
}