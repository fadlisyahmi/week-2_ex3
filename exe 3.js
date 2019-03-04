var nama = '';
var peran = '';


while (nama.length === 0) {
  nama = prompt('Nama: ','');
  if (nama.length === 0) {
    alert('Nama harus diisi!');
  }
}

var nama = 'Mikael';
var peran = '';

while (peran!="Ksatria"&&peran!=="Tabib"&&peran!="Penyihir"|| peran.length === 0){
  peran = prompt("Peran: ","Ksatria, Tabib, atau Penyihir");
  if (peran!="Ksatria"&&peran!=="Tabib"&&peran!="Penyihir"|| peran.length === 0) {
    alert("Pilih peranmu untuk memulai game.");
  }
}

var nama = 'Nina';
var peran = 'Ksatria';

if (peran === "Ksatria") {
  alert("Selamat datang di Dunia Proxytia, " + nama + "!\n\nHalo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!");
}

var nama = 'Danu';
var peran = 'Tabib';

if (peran === "Tabib") {
  alert("Selamat datang di Dunia Proxytia, " + nama + "!\n\nHalo Tabib " + nama + ", kamu akan membantu temanmu yang terluka.");
}

var nama = 'Zero';
var peran = 'Penyihir';

if {
  alert("Selamat datang di Dunia Proxytia, " + nama + "!\n\nHalo Penyihir" + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
}