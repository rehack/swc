// void  operator on string type
var STRING;
var STRING1 = [
    "",
    "abc"
];
function foo() {
    return "abc";
}
class A {
    static foo() {
        return "";
    }
}
var M;
(function(M) {
    var n;
    M.n = n;
})(M || (M = {}));
var objA = new A();
// string type var
var ResultIsAny1 = void STRING;
var ResultIsAny2 = void STRING1;
// string type literal
var ResultIsAny3 = void "";
var ResultIsAny4 = void {
    x: "",
    y: ""
};
var ResultIsAny5 = void {
    x: "",
    y: (s)=>{
        return s;
    }
};
// string type expressions
var ResultIsAny6 = void objA.a;
var ResultIsAny7 = void M.n;
var ResultIsAny8 = void STRING1[0];
var ResultIsAny9 = void foo();
var ResultIsAny10 = void A.foo();
var ResultIsAny11 = void (STRING + STRING);
var ResultIsAny12 = void STRING.charAt(0);
// multiple void  operators
var ResultIsAny13 = void void STRING;
var ResultIsAny14 = void void void (STRING + STRING);
// miss assignment operators
void "";
void STRING;
void STRING1;
void foo();
objA.a, M.n;
