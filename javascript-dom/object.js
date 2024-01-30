var siswa = new Object();
siswa.namaDepan = "Malka";
siswa.namaBelakang = "ataya";
siswa.alamat = "bandung";
siswa.namaLengkap = function() {
    return this.namaDepan + " " + this.namaBelakang;
};

var siswa2 = {
    namaDepan : "Asep",
    namaBelakang : "dawet",
    Alamat : "Bandung",
    namaLengkap: function () {
        return this.namaDepan + " " + this.namaBelakang; 
    }
}
alert("Nama :" + siswa.namaLengkap());
alert("Nama :" + siswa2.namaLengkap());