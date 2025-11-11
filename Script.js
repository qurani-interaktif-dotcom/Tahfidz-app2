let nilaiHafalan = 0;
let nilaiTajwid = 0;

function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// ----- Baca Qur'an -----
const surahList = {
  "Al-Fatihah": [
    "Bismillahirrahmanirrahim",
    "Alhamdulillahi rabbil 'alamin",
    "Arrahmanirrahim",
    "Maliki yaumiddin"
  ]
};

function loadSurah() {
  const surah = document.getElementById("surahSelect").value;
  const ayatContainer = document.getElementById("ayatContainer");
  ayatContainer.innerHTML = "";
  surahList[surah].forEach(a => {
    const p = document.createElement("p");
    p.textContent = a;
    ayatContainer.appendChild(p);
  });
}

window.onload = () => {
  const surahSelect = document.getElementById("surahSelect");
  for (let s in surahList) {
    const option = document.createElement("option");
    option.textContent = s;
    surahSelect.appendChild(option);
  }
};

// ----- Hafalan -----
function periksaHafalan() {
  const jawaban = document.getElementById("jawaban").value.trim();
  if (jawaban === "rahim") {
    document.getElementById("hasilHafalan").textContent = "Benar! +10 poin.";
    nilaiHafalan += 10;
    localStorage.setItem("nilaiHafalan", nilaiHafalan);
  } else {
    document.getElementById("hasilHafalan").textContent = "Coba lagi ya!";
  }
  updateNilai();
}

// ----- Tajwid -----
function cekTajwid() {
  const jawab = document.getElementById("jawabanTajwid").value;
  if (jawab === "Idgham") {
    document.getElementById("hasilTajwid").textContent = "Benar! +10 poin.";
    nilaiTajwid += 10;
    localStorage.setItem("nilaiTajwid", nilaiTajwid);
  } else {
    document.getElementById("hasilTajwid").textContent = "Salah. Ulangi lagi.";
  }
  updateNilai();
}

// ----- Nilai -----
function updateNilai() {
  document.getElementById("nilaiHafalan").textContent = localStorage.getItem("nilaiHafalan") || 0;
  document.getElementById("nilaiTajwid").textContent = localStorage.getItem("nilaiTajwid") || 0;
}

function resetNilai() {
  localStorage.clear();
  nilaiHafalan = 0;
  nilaiTajwid = 0;
  updateNilai();
}