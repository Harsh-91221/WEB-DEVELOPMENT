for (var i = 0; i < 3; i++) {
    (function (index) {
        setTimeout(function () { console.log(index); }, 1000 * index);
    })(i);
}
