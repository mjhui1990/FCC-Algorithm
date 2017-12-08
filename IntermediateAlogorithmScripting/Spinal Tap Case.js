
function spinalCase(str) {
    //str.replace(/([a-z])([A-Z])/g, '$1 $2') -- this finds all the lowercase next to a uppercase and changes it to $1 $2 which means lowercase space uppercase
    //replace(/\s+|_+/g, '-') -- this replaces s+( looks for space) |(and)  _(looks for _) and replaces it with -
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s|_/g, '-').toLowerCase();
    return str;
}