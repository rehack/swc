//// [main.ts]
//! 
//!   x Expression expected
//!    ,-[2:1]
//!  2 | declare var dec: any;
//!  3 | 
//!  4 | // uses __esDecorate, __runInitializers, __setFunctionName
//!  5 | export default (@dec class {});
//!    :                 ^
//!  6 | 
//!    `----
//// [tslib.d.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
