import SafeCast from "../../../string/safe-cast";

export default function DotExtension (extension : string|null|undefined) : string {

    if(extension === null || extension === undefined) {

        return '';

    } else {

        return '.' + extension;
    }
}