export function deepCopy2dArray(input) {
    let len = input.length;
    let target = new Array(len);

    for (let i = 0; i < len; i++) {
        target[i] = input[i].slice(0);
    }

    return target;
}

export function deepCopy2dArrayLen(input,len) {
    
    let target = new Array(len);

    for (let i = 0; i < len; i++) {
        target[i] = input[i].slice(0);
    }

    return target;
}

export function create2dArray(rows, cols) {
    var iMax = rows;
    var jMax = cols;
    var arr = new Array();

    for (i = 0; i < iMax; i++) {
        arr[i] = new Array();
        for (j = 0; j < jMax; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}
