import AuthorityInterface from "../authority";

export default interface Authority<A extends AuthorityInterface = AuthorityInterface> {
    authority() : A;
}