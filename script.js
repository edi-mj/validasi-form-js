// --> Bagian Fungsi Validasi <--

// Fungsi validasi nama lengkap
const nama = document.getElementById("nama-lengkap");
const namaError = document.getElementById("nama-error");
function validasiNama() {
  // Reset pesan error
  namaError.textContent = "";

  // Validasi nama lengkap tidak boleh kosong
  namaUser = nama.value.trim();
  if (namaUser == "") {
    namaError.textContent = "Nama lengkap tidak boleh kosong";
    return false;
  } else {
    // Validasi nama lengkap hanya boleh menggunakan format alfabet
    const alfabet = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (let i = 0; i < namaUser.length; i++) {
      if (alfabet.indexOf(namaUser[i]) == -1) {
        namaError.textContent = "Hanya boleh mengandung huruf (a-z)";
        return false;
      }
    }
    // Validasi panjang karakter nama minimal 3 karakter
    if (namaUser.length < 3) {
      namaError.textContent = "Nama lengkap terlalu pendek";
      return false;
    }
  }
  return true;
}

// Fungsi validasi nomor telepon
const telepon = document.getElementById("telepon");
const teleponError = document.getElementById("telepon-error");
function validasiTelepon() {
  // Reset pesan error
  teleponError.textContent = "";

  // Validasi nomor telepon tidak boleh kosong
  teleponUser = telepon.value.trim();
  if (teleponUser == "") {
    teleponError.textContent = "Nomor telepon tidak boleh kosong";
    return false;
  }
  // Validasi nomor telepon hanya boleh menggunakan format numerik (angka)
  const digit = "0123456789";
  for (let i = 0; i < teleponUser.length; i++) {
    if (digit.indexOf(teleponUser[i]) == -1) {
      teleponError.textContent = "Hanya boleh mengandung angka (0-9)";
      return false;
    }
  }
  // Validasi panjang digit nomor telepon minimal 10 digit
  if (teleponUser.length < 10) {
    teleponError.textContent = "Nomor telepon harus berisi minimal 10 digit";
    return false;
  }
  return true;
}

// Fungsi validasi pilihan tiket
const pilihTiket = document.getElementById("pilih-tiket");
const tiketError = document.getElementById("tiket-error");
function validasiTiket() {
  // reset pesan error
  tiketError.textContent = "";

  // validasi jadwal pertandingan harus dipilih selain option default
  tiketUser = pilihTiket.value;
  if (tiketUser == "") {
    tiketError.textContent = "Pilih tiket yang akan dibeli";
    return false;
  }
  return true;
}

// Fungsi validasi jumlah tiket
const jumlahTiket = document.getElementById("jumlah-tiket");
const jumlahError = document.getElementById("jumlah-error");
function validasiJumlah() {
  // reset pesan error
  jumlahError.textContent = "";

  // Validasi jumlah tiket tidak boleh kosong
  if (jumlahTiket.value.trim() == "" || jumlahTiket.value == 0) {
    jumlahError.textContent = "Jumlah tiket tidak boleh kosong";
    return false;
  } else {
    // Validasi jumlah tiket hanya boleh menggunakan format numerik (angka)
    const digit = "01234567890";
    for (let i = 0; i < jumlahTiket.value.length; i++) {
      if (digit.indexOf(jumlahTiket.value) == -1) {
        jumlahError.textContent = "Hanya boleh mengandung angka";
        return false;
      }
    }
    // Validasi nilai maksimal jumlah tiket adalah 5
    if (jumlahTiket.value > 5) {
      jumlahError.textContent = "Maksimal tiket yang bisa dibeli adalah 5";
      return false;
    }
  }
  return true;
}

// Fungsi validasi kode voucher
const kodeVoucher = document.getElementById("kode-voucher");
const voucherError = document.getElementById("voucher-error");
function validasiVoucher() {
  // Reset pesan error
  voucherError.textContent = "";

  // Validasi kode voucher tidak boleh mengandung spasi dan hanya boleh menggunakan format alfanumerik
  const alfanumerik =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const voucherUser = kodeVoucher.value.trim();
  for (let i = 0; i < voucherUser.length; i++) {
    if (voucherUser[i] == " ") {
      voucherError.textContent = "Kode voucher tidak boleh mengandung spasi";
      return false;
    } else if (alfanumerik.indexOf(voucherUser[i]) == -1) {
      voucherError.textContent =
        "Hanya boleh mengandung huruf(a-z) dan/atau angka(0-9)";
      return false;
    }
  }
  return true;
}

// Fungsi validasi persetujuan
const persetujuan = document.getElementById("persetujuan");
const persetujuanError = document.getElementById("persetujuan-error");
function validasiPersetujuan() {
  // reset pesan error
  persetujuanError.textContent = "";

  // Validasi persetujuan aturan dan kebijakan wajib dicentang
  if (persetujuan.checked == false) {
    persetujuanError.textContent = "Aturan dan kebijakan wajib disetujui";
    return false;
  }
  return true;
}

// --> Batas Bagian fungsi Validasi <--

// --> Bagian Event Handling <--

// Menangani event ketika field masukan di-input oleh user (menampilkan pesan error jika tidak valid)
nama.addEventListener("input", validasiNama);
telepon.addEventListener("input", validasiTelepon);
pilihTiket.addEventListener("input", validasiTiket);
jumlahTiket.addEventListener("input", validasiJumlah);
kodeVoucher.addEventListener("input", validasiVoucher);
persetujuan.addEventListener("change", validasiPersetujuan);

// Menangani event ketika form di-submit
const form = document.getElementById("form-pesan-tiket");
form.addEventListener("submit", function (e) {
  // Mencegah aksi default event submit
  e.preventDefault();

  // Penanda yang akan digunakan untuk pengecekan akhir sebelum form di-submit
  let isValid = true;

  // Validasi semua field masukan sebelum form di-submit
  if (validasiPersetujuan() == false) {
    isValid = false;
    persetujuan.focus();
  }
  if (validasiVoucher() == false) {
    isValid = false;
    kodeVoucher.focus();
  }
  if (validasiJumlah() == false) {
    isValid = false;
    jumlahTiket.focus();
  }
  if (validasiTiket() == false) {
    isValid = false;
    pilihTiket.focus();
  }
  if (validasiTelepon() == false) {
    isValid = false;
    telepon.focus();
  }
  if (validasiNama() == false) {
    isValid = false;
    nama.focus();
  }

  // form akan di-submit ketika user mengisikan semua data dengan benar
  if (isValid == true) {
    form.submit();
  }
});

// --> Batas bagian Event Handling <--
