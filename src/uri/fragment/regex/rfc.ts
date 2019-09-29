import SubDelimiter from "../../regex/sub-delimiter";
import Unreserved from "../../regex/unreserved";
import PercentEncoded from "../../regex/percent-encoded";

let subDelimiter = SubDelimiter.source;
let unreserved = Unreserved.source;
let percentEncoded = PercentEncoded.source;

/**
 * essentially same as query, except for #
 */

const Rfc : RegExp =  new RegExp(
    `(${subDelimiter}|${unreserved}|${percentEncoded})*`,
    'i'
);
export default Rfc;