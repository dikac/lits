import * as escapeStringRegexp from "escape-string-regexp";
import Unreserved from "../../string/unreserved";
import Percent from "../../string/percent-encoded-sub-pattern";
import SubDelimiter from "../../string/sub-delimiter";

const subDelimiter = escapeStringRegexp(SubDelimiter);
const unreserved = escapeStringRegexp(Unreserved);
const extra = escapeStringRegexp('@:');

const allowed = extra + subDelimiter + unreserved;

const Pattern : RegExp =  new RegExp(`[/]{2}([${allowed}]|${Percent})*`);
export default Pattern;