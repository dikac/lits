export default interface Get<Identifier, Data> {

    get(identifier : Identifier) : Data | undefined
}