import ToString from "../../string/to-string";
import File from "./file";
import DirectoryRisky from "./directory-risky";
import DotExtension from "./string/dot-extension";

export default class FileRisky extends DirectoryRisky implements File {


    get name () : null|string {

        if(this.length === 0) {

            return null;
        }

        let last = this.last();

        if(last === undefined) {

            return null;
        }

        let parts = last.split('.');

        if(parts.length > 1) {

            parts.pop();
        }

        return parts.join('.');
    }

    set name (name : string|null) {

        this.set(this.length - 1, name + DotExtension(this.extension));
    }

    set extension(extension : null|string) {

        this.set(this.length - 1, this.name + DotExtension(extension));
    }

    get extension() : string|null {

        if(this.length === 0) {

            return null;
        }

        let last = this.last();

        if(last === undefined) {

            return null;
        }

        let parts = last.split('.');

        if(parts.length > 1) {

            return <string> parts.pop();
        }

        return null;
    }
}