function outer(b) {
    var a = 10;
    function inner() {
        console.log(a,b);
    }
    return inner;
}
var close = outer("hello");
close();