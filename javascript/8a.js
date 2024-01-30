var nilai = prompt ("Masukan Nilai :");

if(nilai < 40) {
    alert(nilai + "Kamu Dapat Grade E");
} else if(nilai < 65) {
    alert(nilai + "Kamu Dapat Grade D");
} else if(nilai < 75) {
    alert(nilai + "Kamu Dapat Grade  C");
} else if(nilai < 85) {
    alert(nilai + "Kamu Dapat Grade B");
} else if(nilai <= 100) {
    alert(nilai + "Kamu Dapat Grade A");
}
else { 
    alert("data bukan angka");
}

if (confirm("masukan angka")) {

} else {
    alert("maaf yang anda masukan itu bukan angka");
}