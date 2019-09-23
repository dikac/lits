import ToString from "../../string/to-string";
import File from "./file";
import DirectoryRisky from "./directory-risky";
import DotExtension from "./string/dot-extension";
import SafeCast from "../../string/safe-cast";

export default class FileRisky extends DirectoryRisky implements File {

    name () : null|string {

        if(this.length === 0) {

            return null;
        }

        let last = this.ending();

        if(last === undefined) {

            return null;
        }

        let parts = last.split('.');

        if(parts.length > 1) {

            parts.pop();
        }

        let name = parts.join('.');

        if(name.length === 0) {

            return null;
        }

        return name;
    }

    setName (name : string|null) {

        this.setFile(SafeCast(name) + DotExtension(this.extension()));
    }

    setExtension(extension : null|string) {

        let file : string;

        if(extension === undefined) {

            file = SafeCast(this.name());

        } else {

            file = SafeCast(this.name()) + DotExtension(extension);

        }

        this.setFile(file);
    }

    file() : string|null {

        let ending = this.ending();
        return ending === undefined ? null : ending;
    }

    setFile(file : null|string) {

        if(file === null || file === '') {

            this.pop();

        } else {

            this.set(this.length - 1, file);
        }
    }

    extension() : string|null {

        if(this.length === 0) {

            return null;
        }

        let last = this.ending();

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