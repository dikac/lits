export default function HasMethod (object : object, properties : string[]) : boolean {

    for (let property of properties) {

        if(typeof object[property] !== "function") {

            return false;
        }
    }

    return true;
}