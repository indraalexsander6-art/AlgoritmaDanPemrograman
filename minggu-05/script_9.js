function linearSearch(arr, target) {
  let langkah = [];
  for (let i = 0; i < arr.length; i++) {
    langkah.push(`Periksa indeks ${i} → Barcode ${arr[i].barcode}`);
    if (arr[i].barcode === target) {
      langkah.push(`✅ Produk ditemukan: ${arr[i].produk}`);
      return { index: i, produk: arr[i].produk, langkah };
    }
  }
  langkah.push(`❌ Produk dengan barcode ${target} tidak ditemukan.`);
  return { index: -1, produk: null, langkah };
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let langkah = [];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    langkah.push(`Periksa indeks ${mid} → Barcode ${arr[mid].barcode}`);

    if (arr[mid].barcode === target) {
      langkah.push(`✅ Produk ditemukan: ${arr[mid].produk}`);
      return { index: mid, produk: arr[mid].produk, langkah };
    } else if (arr[mid].barcode < target) {
      langkah.push(`Geser ke kanan (karena ${target} > ${arr[mid].barcode})`);
      left = mid + 1;
    } else {
      langkah.push(`Geser ke kiri (karena ${target} < ${arr[mid].barcode})`);
      right = mid - 1;
    }
  }

  langkah.push(`❌ Produk dengan barcode ${target} tidak ditemukan.`);
  return { index: -1, produk: null, langkah };
}

function cariProduk() {
  let input = document.getElementById("inputBarcode").value;
  let target = parseInt(input);
  let hasilDiv = document.getElementById("hasil");
  let linearDiv = document.getElementById("linearLangkah");
  let binaryDiv = document.getElementById("binaryLangkah");

  if (isNaN(target)) {
    hasilDiv.textContent = "Mohon masukkan barcode berupa angka!";
    hasilDiv.className = "hasil-produk gagal";
    return;
  }

  let linear = linearSearch(daftarProduk, target);
  let binary = binarySearch(daftarProduk, target);

  if (linear.index !== -1) {
    hasilDiv.textContent = `Produk ditemukan: ${linear.produk}`;
    hasilDiv.className = "hasil-produk sukses";
  } else {
    hasilDiv.textContent = `Produk dengan barcode ${target} tidak ditemukan.`;
    hasilDiv.className = "hasil-produk gagal";
  }

  linearDiv.innerHTML = linear.langkah.join("<br>");
  binaryDiv.innerHTML = binary.langkah.join("<br>");
}