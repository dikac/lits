import pattern from "../pattern";

export default function IsRfc3986(scheme : string) : boolean {

    return scheme.match(new RegExp(`^${pattern}$`)) !== null;
}