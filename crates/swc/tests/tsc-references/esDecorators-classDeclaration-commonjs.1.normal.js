//// [esDecorators-classDeclaration-commonjs.ts]
//! 
//!   x Expression expected
//!    ,-[1:1]
//!  1 | 
//!  2 | declare var deco: any;
//!  3 | 
//!  4 | @deco
//!    : ^
//!  5 | export class Example {
//!  6 |     static foo() {}
//!  7 | }
//!    `----
