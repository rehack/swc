//// [usingDeclarationsWithLegacyClassDecorators.2.ts]
import { _ as _ts_decorate } from "@swc/helpers/_/_ts_decorate";
import { _ as _using_ctx } from "@swc/helpers/_/_using_ctx";
var _C;
try {
    var _usingCtx = _using_ctx();
    var before = _usingCtx.u(null);
    class C {
    }
    _C = C;
    C = _ts_decorate([
        dec
    ], C);
} catch (_) {
    _usingCtx.e = _;
} finally{
    _usingCtx.d();
}
export { _C as C };
