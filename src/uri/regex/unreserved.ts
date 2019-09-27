const symbol = '_-.~';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const digit = '0123456789';

const Unreserved  : RegExp = /[a-z0-9_\-.~]/i;
export default Unreserved;