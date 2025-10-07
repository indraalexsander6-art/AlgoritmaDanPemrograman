let data = [];
const visual = document.getElementById("visual");

const tampil = () => {
  visual.innerHTML = "";
  data.forEach(m => {
    const bar = document.createElement("div");
    bar.className = "bar";
    bar.style.height = `${m.nilai * 3}px`;
    bar.innerHTML = `<span>${m.nama}<br>${m.nilai}</span>`;
    visual.appendChild(bar);
  });
};

const tambah = () => {
  const n = nama.value.trim(), v = parseFloat(nilai.value);
  if (!n || isNaN(v)) return alert("Isi nama dan nilai dengan benar!");
  data.push({ nama: n, nilai: v }); tampil();
  nama.value = nilai.value = "";
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function bubbleSort(mode) {
  let bars = document.querySelectorAll(".bar"), n = data.length;
  for (let i = 0; i < n - 1; i++)
    for (let j = 0; j < n - i - 1; j++) {
      bars[j].classList.add("compare");
      bars[j + 1].classList.add("compare");
      await sleep(300);
      const swap = (mode === "asc" && data[j].nilai > data[j + 1].nilai) ||
                   (mode === "desc" && data[j].nilai < data[j + 1].nilai);
      if (swap) {
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
        tampil(); bars = document.querySelectorAll(".bar");
        await sleep(300);
      }
      bars[j].classList.remove("compare");
      bars[j + 1].classList.remove("compare");
    }
}

async function mulai(mode) {
  if (data.length < 2) return alert("Masukkan minimal 2 data!");
  document.querySelectorAll("button").forEach(b => b.disabled = true);
  await bubbleSort(mode);
  document.querySelectorAll("button").forEach(b => b.disabled = false);
}