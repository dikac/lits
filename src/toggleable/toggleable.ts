export default interface Toggleable {

    enable() : void;
    enabled() : boolean;
    disable() : void;
    disabled() : boolean;
}