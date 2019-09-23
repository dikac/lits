import SubPattern from "../sub-pattern";

export default function IsRfc3986(scheme : string) : boolean {

    return scheme.match(new RegExp(`^${SubPattern}$`)) !== null;
}