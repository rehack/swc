//// [esDecorators-classDeclaration-fields-static.ts]
//! 
//!   x Unexpected token `@`. Expected identifier, string literal, numeric literal or [ for the computed key
//!     ,-[4:1]
//!   4 | const field3 = "field3";
//!   5 | 
//!   6 | class C {
//!   7 |     @dec(1) static field1 = 1;
//!     :     ^
//!   8 |     @dec(2) static ["field2"] = 2;
//!   9 |     @dec(3) static [field3] = 3;
//!  10 | }
//!     `----
