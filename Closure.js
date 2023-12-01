function x()
{
    var a=5;
    return function y()
    {
        console.log(a);
    }
    y();
}
var z=x();
console.log(z);
z();