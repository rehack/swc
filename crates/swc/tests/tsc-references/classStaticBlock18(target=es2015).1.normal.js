//// [classStaticBlock18.ts]
function foo() {
    var _class, __;
    return _class = class {
    }, _class.foo = 1, __ = {
        writable: true,
        value: (()=>{
            var _class, __;
            const c = (_class = class {
            }, _class.bar = 2, __ = {
                writable: true,
                value: (()=>{
                // do
                })()
            }, _class);
        })()
    }, _class;
}