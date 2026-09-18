const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function opsi() {
    rl.question("\n\n1. Kembali ke daftar fitur\nc. Close program\nPilih: ", function (pilihan) {

        if (pilihan === "1") {
            pilihFitur();

        } else if (pilihan === "c") {
            console.log("Program ditutup.");
            rl.close();

        } else {
            console.log("Pilihan tidak tersedia.");
            opsi();
        }

    });
}

function pilihFitur() {

    console.log("\n===== DAFTAR FITUR =====");
    console.log("1. Balik Kata / kalimat");
    console.log("2. Hitung huruf dalam kalimat");
    console.log("3. Hitung karakter");
    console.log("c. Close");

    rl.question("Pilih fitur: ", function (fitur) {

        if (fitur === "1") {

            rl.question("Masukkan kalimat anda: ", function (kalimat) {
                soal1(kalimat);
                opsi();
            });

        } else if (fitur === "2") {

            rl.question("Masukkan kalimat anda: ", function (kalimat) {

                rl.question("Masukkan huruf yang dicari: ", function (huruf) {
                    soal2(kalimat, huruf);
                    opsi();
                });

            });

        } else if (fitur === "3") {

            rl.question("Masukkan kalimat anda: ", function (kalimat) {
                soal3(kalimat);
                opsi();
            });

        } else if (fitur === "c") {

            console.log("Program ditutup.");
            rl.close();

        } else {

            console.log("Pilihan tidak tersedia.");
            pilihFitur();
        }
    });
}


function soal1(kalimat) {

    let hasil = "";

    for (let i = kalimat.length - 1; i >= 0; i--) {
        hasil += kalimat[i];
    }

    console.log("\n\nHasil :\n" + hasil);
}


function soal2(kalimat, huruf) {

    let jumlah = 0;

    for (let i = 0; i < kalimat.length; i++) {

        if (kalimat[i] === huruf) {
            jumlah++;
        }
    }

    console.log("\n\nHasil :\n" + jumlah);
}


function soal3(kalimat) {

    let jumlah = kalimat.length;

    console.log("\n\nHasil :\n" + jumlah);
}


// Program dimulai
pilihFitur();