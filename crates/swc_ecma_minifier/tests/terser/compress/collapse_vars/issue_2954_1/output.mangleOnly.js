var a = "PASS", b;
try {
    do {
        b = (function() {
            throw 0;
        })();
        a = "FAIL";
        b && b.c;
    }while (0)
} catch (c) {}
console.log(a);
