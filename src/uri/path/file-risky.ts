import ToString from "../../string/to-string";
import File from "./file";
import DirectoryRisky from "./directory-risky";
import DotExtension from "./string/dot-extension";
import SafeCast from "../../string/safe-cast";

export default class FileRisky extends DirectoryRisky implements File {


    get name () : undefined|string {

        if(this.length === 0) {

            return undefined;
        }

        let last = this.last();

        if(last === undefined) {

            return undefined;
        }

        let parts = last.split('.');

        if(parts.length > 1) {

            parts.pop();
        }

        let name = parts.join('.');

        if(name.length === 0) {

            return undefined;
        }

        return name;
    }

    set name (name : string|undefined) {

        this.file = SafeCast(name) + DotExtension(this.extension);
    }

    set extension(extension : undefined|string) {

        let file : string;

        if(extension === undefined) {

            file = SafeCast(this.name);

        } else {

            file = SafeCast(this.name) + DotExtension(extension);

        }

        this.file = file;
    }


    get file() : string|undefined {

        return this.last();
    }

    set file(file : undefined|string) {

        if(file === undefined || file === '') {

            this.pop();

        } else {

            this.set(this.length - 1, file);
        }
    }

    get extension() : string|undefined {

        if(this.length === 0) {

            return undefined;
        }

        let last = this.last();

        if(last === undefined) {

            return undefined;
        }

        let parts = last.split('.');

        if(parts.length > 1) {

            return <string> parts.pop();
        }

        return undefined;
    }
}