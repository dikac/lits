export default function DotExtension (extension : string|null) : string {

    if(extension === null) {

        return '';

    } else {

        return '.' + extension;
    }
}