import HasMethods from "../../object/boolean/has-methods";
import HasSymbolIterator from "../../object/boolean/has-symbol-iterator";
import HasSymbolToString from "../../object/boolean/has-symbol-to-string";

export default function Is <Key, Value> (value : any) : value is Map<Key, Value> {

    if(typeof value !== 'object' || value === null) {

        return false;
    }

        if(!('size' in value)) {

            return false;
        }

        if(!HasMethods(value, ['clear', 'delete', 'forEach', 'get', 'has', 'set'])) {

            return false;
        }

        if(!HasSymbolIterator(value)) {

            return false;
        }

        if(!HasSymbolToString(value)) {

            return false;
        }

        return true;
}


