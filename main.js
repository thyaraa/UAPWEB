const dataProduk = [
  { kode: "001", nama: "Produk A", harga: 10000 },
  { kode: "002", nama: "Produk B", harga: 20000 },
  { kode: "003", nama: "Produk C", harga: 30000 },
];

function data(kodeProduk) {
  const produk = dataProduk.find((item) => item.kode === kodeProduk);
  return produk ? produk.harga : 0;
}

function kirim() {
  const input_kode = document.getElementById("input_kode").value;
  const input_jumlah = document.getElementById("input_jumlah").value;

  const harga_produk = data(input_kode);
  const total_harga = parseInt(input_jumlah) * harga_produk;

  alert("Total Belanja: " + total_harga);

  const uang = prompt("Masukkan uang :");

  if (uang === null || uang === "") {
    alert("Input uang tidak valid atau dibatalkan.");
    return;
  }

  const uangInt = parseInt(uang);

  if (isNaN(uangInt)) {
    alert("Input uang tidak valid.");
    return;
  }

  const kembalian = uangInt - total_harga;

  if (kembalian >= 0) {
    const jumlahBarang = parseInt(input_jumlah);
    alert(
      "Total Belanja: " +
        total_harga +
        "\nJumlah Barang: " +
        jumlahBarang +
        "\nUang yang Diberikan: " +
        uangInt +
        "\nKembalian: " +
        kembalian
    );
  } else {
    alert("Uang yang diberikan kurang.");
  }
}
