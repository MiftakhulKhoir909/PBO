const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

function soal24(awal,akhir){
    let hasil = "";
    for ( let i = awal; i <= akhir; i ++){
        if (i %10 == 0 && (i % 400 == 0 || (i % 4 == 0 && i % 100 != 0))){
            hasil += i + " ";
        }
    }
    console.log("\nTahun kabisat dengan satuan 0 dari angka tahun " + awal + " sampai tahun " + akhir + " :\n" + hasil); opsi();
}

function soal25(awal,akhir){
    let hasil = "";
    for ( let i = awal; i <= akhir; i ++){
        if (i %10 == 2 && (i % 400 == 0 || (i % 4 == 0 && i % 100 != 0))){
            hasil += i + " ";
        }
    }
    console.log("\nTahun kabisat dengan satuan 2 dari angka tahun " + awal + " sampai tahun " + akhir + " :\n" + hasil);
}

function soal26(awal,akhir){
    let hasil = "";
    for ( let i = awal; i <= akhir; i ++){
        if (i %10 == 4 && (i % 400 == 0 || (i % 4 == 0 && i % 100 != 0))){
            hasil += i + " ";
        }
    }
    console.log("\nTahun kabisat dengan satuan 4 dari angka tahun " + awal + " sampai tahun " + akhir + " :\n" + hasil);
}

function soal27(awal,akhir){
    let hasil = "";
    for ( let i = awal; i <= akhir; i ++){
        if (i %10 == 6 && (i % 400 == 0 || (i % 4 == 0 && i % 100 != 0))){
            hasil += i + " ";
        }
    }
    console.log("\nTahun kabisat dengan satuan 6 dari angka tahun " + awal + " sampai tahun " + akhir + " :\n" + hasil);
}

function soal28(awal,akhir){
    let hasil = "";
    for ( let i = awal; i <= akhir; i ++){
        if (i %10 == 8 && (i % 400 == 0 || (i % 4 == 0 && i % 100 != 0))){
            hasil += i + " ";
        }
    }
    console.log("\nTahun kabisat dengan satuan 8 dari angka tahun " + awal + " sampai tahun " + akhir + " :\n" + hasil);
}

function soal29(awal,akhir){
    let hasil = "";
    for (let i = awal; i <= akhir; i++){
        if ( i %3 == 0){
            hasil += i + " ";
        }
    }
    console.log("\nBilangan yang habis dibagi 3 dari angka " + awal + " sampai " + akhir + " adalah :\n" + hasil);
}

function soal30(awal,akhir){
    let hasil = "";
    for (let i = awal; i <= akhir; i++){
        if ( i %4 == 0){
            hasil += i + " ";
        }
    }
    console.log("\nBilangan yang habis dibagi 4 dari angka " + awal + " sampai " + akhir + " adalah :\n" + hasil);
}

function soal31(awal,akhir){
    let hasil = "";
    for (let i = awal; i <= akhir; i++){
        if ( i %5 == 0){
            hasil += i + " ";
        }
    }
    console.log("\nBilangan yang habis dibagi 5 dari angka " + awal + " sampai " + akhir + " adalah :\n" + hasil);
}

function soal32(awal,akhir){
    let hasil = "";
    for (let i = awal; i <= akhir; i++){
        if ( i %6 == 0){
            hasil += i + " ";
        }
    }
    console.log("\nBilangan yang habis dibagi 6 dari angka " + awal + " sampai " + akhir + " adalah :\n" + hasil);
}

function soal33(awal,akhir){
    let hasil = "";
    for (let i = awal; i <= akhir; i++){
        if ( i %7 == 0){
            hasil += i + " ";
        }
    }
    console.log("\nBilangan yang habis dibagi 7 dari angka " + awal + " sampai " + akhir + " adalah :\n" + hasil);
}

function menu(){

    console.log("\n24. Cari tahun kabisat dengan akhiran 0")
    console.log("25. Cari tahun kabisat dengan akhiran 2")
    console.log("26. Cari tahun kabisat dengan akhiran 4")
    console.log("27. Cari tahun kabisat dengan akhiran 6")
    console.log("28. Cari tahun kabisat dengan akhiran 8")
    console.log("29. Cari bilangan yang habis dibagi dengan 3")
    console.log("30. Cari bilangan yang habis dibagi dengan 4")
    console.log("31. Cari bilangan yang habis dibagi dengan 5")
    console.log("32. Cari bilangan yang habis dibagi dengan 6")
    console.log("33. Cari bilangan yang habis dibagi dengan 7")
    console.log("0. close")

    rl.question("Pilih fitur : ", function(fitur){
        if( fitur =="0"){
            console.log("Program diakhiri\n");
            rl.close();
        }else if( fitur >= 24 && fitur <= 33){
            rl.question("Masukan nilai awal : ", function(awal){
                rl.question("Masukkan nilai akhir : ", function(akhir){
                    if(fitur == "24"){
                        soal24(awal,akhir);
                        opsi();
                    }else if(fitur == "25"){
                        soal25(awal,akhir);
                        opsi();
                    }else if(fitur == "26"){
                        soal26(awal,akhir);
                        opsi();
                    }else if(fitur == "27"){
                        soal27(awal,akhir);
                        opsi();
                    }else if(fitur == "28"){
                        soal28(awal,akhir);
                        opsi();
                    }else if(fitur == "29"){
                        soal29(awal,akhir);
                        opsi();
                    }else if(fitur == "30"){
                        soal30(awal,akhir);
                        opsi();
                    }else if(fitur == "31"){
                        soal31(awal,akhir);
                        opsi();
                    }else if(fitur == "32"){
                        soal32(awal,akhir);
                        opsi();
                    }else if(fitur == "33"){
                        soal33(awal,akhir);
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