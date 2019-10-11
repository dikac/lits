import NotNull from "../../object/boolean/not-null";
import HasSymbolToString from "../../object/boolean/has-symbol-to-string";
import HasSymbolIterator from "../../object/boolean/has-symbol-iterator";
import HasMethods from "../../object/boolean/has-methods";
import HasProperties from "../../object/boolean/has-properties";

export default function Is<Value = any> (value : any) : value is Set<Value> {

    if(!NotNull(value)) {

        return false;
    }

    if(!HasSymbolToString(value)) {

        return false;
    }

    if(!HasSymbolIterator(value)) {

        return false;
    }

    if(!HasMethods(value, ['entries', 'keys', 'forEach', 'values', 'add', 'clear', 'delete', 'has'])) {

        return false;
    }

    if(!HasProperties(value, ['size'])) {

        return false;
    }

    return true;
}