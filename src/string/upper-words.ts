import UpperFirst from './upper-first';

export default function UpperWords (
    string : string,
    splitters : Iterable<string>
) : string {

    for(let splitter of splitters) {

        let temp : string[] = [];

        for(let str of string.split(splitter)) {

            temp.push(UpperFirst(str));
        }

        string = temp.join(splitter);
    }

    return string;

}