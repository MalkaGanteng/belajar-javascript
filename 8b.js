// Daftar menu dan harga
var menu = {
    "Nasi Goreng": 15000,
    "Mie Baso": 10000,
    "Bubur Ayam": 25000,
    "Nasi Uduk": 20000
};

// Memilih menu
var pesanan = prompt("Silakan pilih menu yang ingin dipesan:\n" + Object.keys(menu).join("\n"));
var jumlah = prompt("Masukkan jumlah " + pesanan + " yang ingin dipesan:");

// Menghitung total biaya
var totalBiaya;
if (menu.hasOwnProperty(pesanan)) {
    totalBiaya = menu[pesanan] * parseInt(jumlah);
    alert("Anda telah memesan " + jumlah + " " + pesanan + ". Total biaya: Rp" + totalBiaya);
} else {
    alert("Menu tidak tersedia.");
}