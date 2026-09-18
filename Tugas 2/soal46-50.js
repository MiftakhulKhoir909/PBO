const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function soal46(awal,akhir){
    let hasil= 0;
    for(let i = awal; i <= akhir; i ++){
        if(i>0){
            hasil += i;
        }   
    }
    console.log("\nTotal bilangan bulat positif dari "+ awal +" sampai "+ akhir +" adalah :\n"+ hasil);
}

function soal47(awal,akhir){
    let hasil= 0;
    for(let i = awal; i <= akhir; i ++){
        if(i %2 == 0){
            hasil += i;
        }   
    }
    console.log("\nTotal bilangan genap dari "+ awal +" sampai "+ akhir +" adalah :\n"+ hasil);
}

function soal48(awal,akhir){
    let hasil= 0;
    for(let i = awal; i <= akhir; i ++){
        if(i %2 == 1){
            hasil += i;
        }   
    }
    console.log("\nTotal bilangan ganjil dari "+ awal +" sampai "+ akhir +" adalah :\n"+ hasil);
}

function soal49(awal, akhir) {
    let hasil = "";

    for (let i = awal; i <= akhir; i++) {
        let prima = true;

        if (i < 2) {
            prima = false;
        }

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                prima = false;
                break;
            }
        }

        if (prima) {
            hasil += i + " ";
        }
    }

    console.log(
        "\nBilangan prima dari " + awal + " sampai " + akhir + " adalah :\n" + hasil
    );
}

function soal50(awal, akhir) {
    let hasil = 0;

    for (let i = awal; i <= akhir; i++) {
        let prima = true;

        if (i < 2) {
            prima = false;
        }

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                prima = false;
                break;
            }
        }

        if (prima) {
            hasil += i;
        }
    }

    console.log(
        "\nTotal bilangan prima dari " + awal + " sampai " + akhir + " adalah :\n" + hasil
    );
}

function menu(){
    console.log("\n46. Hitung total jumlah bilangan buat positif dari awal - akhir")
    console.log("47. Hitung total jumlah bilangan genap dari awal - akhir")
    console.log("48. Hitung total jumlah bilangan ganjil dari awal - akhir")
    console.log("49. Tampilkan bilangan prima dari awal - akhir")
    console.log("50. Hitung total jumlah bilangan prima dari awal - akhir")
    console.log("0. close")

    rl.question("\nPilih fitur : ", function(fitur){
        if( fitur =="0"){
            console.log("Program diakhiri\n");
            rl.close();
        }else if( fitur >= 46 && fitur <= 50){
            rl.question("Masukan nilai awal : ", function(awal){
                rl.question("Masukkan nilai akhir : ", function(akhir){
                    if(fitur == "46"){
                        soal46(awal,akhir);
                        opsi();
                    }else if(fitur == "47"){
                        soal47(awal,akhir);
                        opsi();
                    }else if(fitur == "48"){
                        soal48(awal,akhir);
                        opsi();
                    }else if(fitur == "49"){
                        soal49(awal,akhir);
                        opsi();
                    }else if(fitur == "50"){
                        soal50(awal,akhir);
                        opsi();
                    }else {
                        console.log("Pilihan tidak tersedia");
                        menu();
                    }
                })
            })
        }else{
            console.log("Pilihan tidak tersedia");
            menu();
        }

    })

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