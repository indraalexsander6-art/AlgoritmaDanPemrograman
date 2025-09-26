function cariTigaTerbesar() {
    let input = document.getElementById("nilaiInput").value;
    let arr = input.split(",").map(num => parseInt(num.trim())).filter(num => !isNaN(num));

    if (arr.length < 3) {
        document.getElementById("hasil").innerHTML = "Masukkan minimal 3 angka.";
        return;
    }

    let max1 = -Infinity, max2 = -Infinity, max3 = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        let nilai = arr[i];
        if (nilai > max1) {
            max3 = max2;
            max2 = max1;
            max1 = nilai;
        } else if (nilai > max2) {
            max3 = max2;
            max2 = nilai;
        } else if (nilai > max3) {
            max3 = nilai;
        }
    }

    document.getElementById("hasil").innerHTML = `
        🏆 Nilai Terbesar 1: ${max1}<br>
        🥈 Nilai Terbesar 2: ${max2}<br>
        🥉 Nilai Terbesar 3: ${max3}
    `;
}
