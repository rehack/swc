//// [nonInstantiatedModule.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
(M || (M = {})).a = 1;
var M, M2, M3, m = M;
M.a, m.a, function(M2) {
    (M2.Point || (M2.Point = {})).Origin = function() {
        return {
            x: 0,
            y: 0
        };
    };
}(M2 || (M2 = {})), (M3 || (M3 = {})).Utils = function Utils() {
    "use strict";
    _class_call_check(this, Utils);
};
