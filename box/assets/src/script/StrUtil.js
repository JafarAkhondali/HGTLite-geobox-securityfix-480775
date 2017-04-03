
//从右边切分字符串
export function strRSplit(s,sep,maxsplit){

    let splitList = s.split(sep);

    return maxsplit ? [splitList.slice(0,-maxsplit).join(sep)].concat(splitList.slice(-maxsplit)):splitList;

}
