//// [privateNameStaticFieldAccess.ts]
import _class_static_private_field_spec_get from "@swc/helpers/src/_class_static_private_field_spec_get.mjs";
class A {
    constructor(){
        console.log(_class_static_private_field_spec_get(A, A, _myField)), console.log(_class_static_private_field_spec_get(this, A, _myField));
    }
}
var _myField = {
    writable: !0,
    value: "hello world"
};