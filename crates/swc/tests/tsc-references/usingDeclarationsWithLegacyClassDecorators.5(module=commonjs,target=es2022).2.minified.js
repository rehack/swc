//// [usingDeclarationsWithLegacyClassDecorators.5.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "C", {
    enumerable: !0,
    get: function() {
        return C;
    }
});
const _ts_decorate = require("@swc/helpers/_/_ts_decorate"), _dispose = require("@swc/helpers/_/_dispose"), _using = require("@swc/helpers/_/_using");
try {
    var _stack = [];
    _using._(_stack, null);
    class C1 {
    }
    C1 = _ts_decorate._([
        dec
    ], C1);
} catch (_) {
    var _error = _, _hasError = !0;
} finally{
    _dispose._(_stack, _error, _hasError);
}
