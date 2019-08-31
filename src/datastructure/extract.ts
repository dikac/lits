export default interface Extract<Identifier, Data> {

    extract(identifier : Identifier) : undefined | Data
}