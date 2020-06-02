export function jena_fibonaci(n) {
    var serye = [];
    for (var i = 0; i < n; i++) {
        if (i == 0)
            serye.push(1);
        else if (i == 1)
            serye.push(1);
        else
            serye.push(serye[i - 2] + serye[i - 1]);
    }
    return serye;
}
//# sourceMappingURL=matike.js.map