const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function soal42() {
    let listAngka = [];
    let min = 10;
    let terbesar = 1;

    function input() {
        rl.question(
            "Masukkan angka ke-" + (listAngka.length + 1) + " : ",
            function (angka) {

                angka = Number(angka);
                listAngka.push(angka);

                if (angka > terbesar) {
                    terbesar = angka;
                }

                if (listAngka.length < min) {
                    input();
                } else {
                    rl.question (
                        "\nIngin input angka lagi ? (y/n)", 
                        function (lagi){
                            if (lagi == "y" ){
                                rl.question(
                                    "Mau input berapa kali lagi?",
                                    function (lagi2){
                                        min += Number(lagi2);
                                        input();
                                    }
                                )
                            } else if ( lagi == "n"){
                                console.log(
                                    "\n\nDari "+ min + " input angka tersebut, angka terbesarnya adalah: \n" + terbesar +"\n"
                                );
                                opsi();
                            }
                        }
                    )
                }
            }
        );
    }

    input();
}

function soal43() {
    let listAngka = [];
    let min = 10;
    let terkecil;

    function input() {
        rl.question(
            "Masukkan angka ke-" + (listAngka.length + 1) + " : ",
            function (angka) {

                angka = Number(angka);
                listAngka.push(angka);

                if (listAngka.length === 1) {
                    terkecil = angka;
                } else if ( angka < terkecil) {
                    terkecil = angka
                }

                if (listAngka.length < min) {
                    input();
                } else {
                    rl.question (
                        "\nIngin input angka lagi ? (y/n)", 
                        function (lagi){
                            if (lagi == "y" ){
                                rl.question(
                                    "Mau input berapa kali lagi?",
                                    function (lagi2){
                                        min += Number(lagi2);
                                        input();
                                    }
                                )
                            } else if ( lagi == "n"){
                                console.log(
                                    "\n\nDari "+ min + " input angka tersebut, angka terkecilnya adalah: \n" + terkecil +"\n"
                                );
                                opsi();
                            }
                        }
                    )
                }
            }
        );
    }

    input();
}


function soal44(){
    let listAngka = [];
    let min =10;
    let jumlah =0;

    function input() {
        rl.question(
            "Masukkan angka ke-" + (listAngka.length + 1) + " : ",
            function (angka) {

                angka = Number(angka);
                listAngka.push(angka);

                if (angka %2 == 0) {
                    jumlah += 1;
                }

                if (listAngka.length < min) {
                    input();
                } else {
                    rl.question (
                        "\nIngin input angka lagi ? (y/n)", 
                        function (lagi){
                            if (lagi == "y" ){
                                rl.question(
                                    "Mau input berapa kali lagi?",
                                    function (lagi2){
                                        min += Number(lagi2);
                                        input();
                                    }
                                )
                            } else if ( lagi == "n"){
                                console.log(
                                    "\n\nDari "+ min + " input angka tersebut, ada bilangan genap sebanyak : \n" + jumlah +"\n"
                                );
                                opsi();
                            }
                        }
                    )
                }
            }
        );
    }

    input();

}

function soal45(){
    let listAngka = [];
    let min =10;
    let jumlah =0;

    function input() {
        rl.question(
            "Masukkan angka ke-" + (listAngka.length + 1) + " : ",
            function (angka) {

                angka = Number(angka);
                listAngka.push(angka);

                if (angka %2 == 1) {
                    jumlah += 1;
                }

                if (listAngka.length < min) {
                    input();
                } else {
                    rl.question (
                        "\nIngin input angka lagi ? (y/n)", 
                        function (lagi){
                            if (lagi == "y" ){
                                rl.question(
                                    "Mau input berapa kali lagi?",
                                    function (lagi2){
                                        min += Number(lagi2);
                                        input();
                                    }
                                )
                            } else if ( lagi == "n"){
                                console.log(
                                    "\n\nDari "+ min + " input angka tersebut, ada bilangan ganjil sebanyak : \n" + jumlah +"\n"
                                );
                                opsi();
                            }
                        }
                    )
                }
            }
        );
    }

    input();

}

function menu(){

    console.log("\n42. Cari nilai terkecil dari (min10) input")
    console.log("43. Cari nilai terbesar dari (min10) input")
    console.log("44. Cari jumlah bilangan genap dari (min10) input")
    console.log("45. Cari jumlah bilangan ganjil dari (min10) input")
    console.log("0. close")

    rl.question(
        "\nPilih fitur :",
        function(fitur){
            if (fitur == "42"){
                soal42();
            } else if (fitur == "43"){
                soal43();
            } else if (fitur == "44"){
                soal44();
            } else if (fitur == "45"){
                soal45();
            } else if (fitur == "0"){
                console.log("Program ditutup")
                rl.close();
            } else {
                console.log("Pilihan tidak sesuai");
                menu();
            }
        }
    )

}

function opsi(){
    console.log("\n1. menu\n0. close")
    rl.question("Pilih :",function (opsi) {
        if (opsi == "1"){
            menu();
        }else if (opsi == "0"){
            console.log("Program diakhiri\n");
            rl.close();
        }else{
            console.log("Pilihan tidak sesuai");
            opsi();
        }
    })
}

menu();