define([
    "require",
    "exports",
    "handlebars"
], function(a, b, c) {
    var d = window;
    var e = (d.Handlebars = c);
    return e;
});
def(function(a) {
    var b = window;
    var c = "Handlebars";
    var d = (b[c] = a);
    return d;
});
def(function(a) {
    var b = "Handlebars";
    var c = window;
    var d = (c[b] = a);
    return d;
});
def(function(a) {
    var b = "Handlebars";
    var c = g();
    var d = (c[b] = a);
    return d;
});
def(function(a) {
    var b = g1();
    var c = g2();
    var d = (c[b] = a);
    return d;
});
def(function(a) {
    var b = g2();
    var c = g1();
    var d = (b[c] = a);
    return d;
});
