//// [symbolProperty49.ts]
var M;
(function(M) {
    var Symbol;
    class C {
        [Symbol.iterator]() {}
    }
    M.Symbol = Symbol;
})(M || (M = {}));