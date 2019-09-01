export default function SafeCast(string : any) : string {

    switch (string) {
        case null :
        case undefined :
            return '';
        default :
            return string.toString();
    }


}