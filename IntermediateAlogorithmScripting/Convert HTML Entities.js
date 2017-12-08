function convertHTML(str) {

    //split string to array
    str = str.split('');
    //loop through array
    for (var i = 0; i < str.length; i++) {
        // if array matches the case switch it 
        switch (str[i]) {
            case '<':
                str[i] = '&lt;';
                break;
            case '&':
                str[i] = '&amp;';
                break;
            case '>':
                str[i] = '&gt;';
                break;
            case '"':
                str[i] = '&quot;';
                break;
            case "'":
                str[i] = "&apos;";
                break;
        }
    }
    //return joined string
    return str.join('');

}