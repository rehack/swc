//// [usingDeclarationsWithLegacyClassDecorators.7.ts]
import { _ as _ts_decorate } from "@swc/helpers/_/_ts_decorate";
import { _ as _using_ctx } from "@swc/helpers/_/_using_ctx";
try {
    var _usingCtx = _using_ctx();
    class C {
    }
    C = _ts_decorate([
        dec
    ], C);
    var after = _usingCtx.u(null);
} catch (_) {
    _usingCtx.e = _;
} finally{
    _usingCtx.d();
}
export { };
