export default function SuffixRemove(source : string, character : string) : string {

    if(source.length !== 0) {

        let position = source.length - 1;

        if(source[position] === character) {

            return source.substr(0, position);
        }

    }

    return source;
}