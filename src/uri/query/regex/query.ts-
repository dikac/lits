import SubDelimiter from "../../string/sub-delimiter";
import * as escapeStringRegexp from "escape-string-regexp";
import Unreserved from "../../string/unreserved";
import PercentEncodedSubPattern from "../../string/percent-encoded-sub-pattern";

const subDelimiter = escapeStringRegexp(SubDelimiter);
const unreserved = escapeStringRegexp(Unreserved);

/**
 * essentially same as fragment, except for ?
 */
const Query : RegExp =  new RegExp(`\\?([${subDelimiter}${unreserved}]|${PercentEncodedSubPattern})*`);
export default Query;