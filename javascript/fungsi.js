var x = "25";
var y = "3.14";

var toNum = parseInt(x);
var toFloat = parseFloat(y);
var toString = toNum.toString();
console.log(x + toNum);
// Fungsi Deklarasi
function jumlah(a, b) {
    return a + b;
}
// Fungsi expresi
var kurang = function (a, b) {
    return a - b;
};
alert(jumlah(5, 20));
alert(jumlah(25, 5));