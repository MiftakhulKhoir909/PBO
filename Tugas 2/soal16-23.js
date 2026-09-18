const readline = require("readline")
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
})

function soal16(){
    let hasil = "";
    let n = 1;
    for ( let i = 1; i <= 12; i ++){

        hasil+=n + " ";
        if (i % 2 == 1) {
            n+= 4;

        }else{
            n-= 2;
        }
    }
    console.log("\nHasil :\n" +hasil); opsi();;
}

function soal17(){
    let hasil = "";
    let n = 2;
    for ( let i = 1; i <= 12; i ++){

        hasil+=n + " ";
        if (i % 2 == 1) {
            n+= 10;

        }else{
            n-= 5;
        }
    }
    console.log("\nHasil :\n" +hasil); opsi();;
}

function soal18(){
    let hasil = "";
    let n = 5;
    for ( let i = 1; i <= 12; i ++){

        hasil+=n + " ";
        if (i % 2 == 1) {
            n -= 3;

        }else{
            n += 5;
        }
    }
    console.log("\nHasil :\n" +hasil); opsi();;
}

function soal19(){
    let hasil = "";
    let n = 3;
    for ( let i = 1; i <= 10; i ++){

        hasil+=n + " ";
        if (i % 2 == 1) {
            n *= 3;

        }else{
            n -= 5;
        }
    }
    console.log("\nHasil :\n" +hasil); opsi();;
}

function soal20(){
    let hasil = "";
    let n = 1;
    for ( let i = 1; i <= 13; i ++){

        hasil+=n + " ";
        if (i % 3 == 1) {
            n += 1;

        }else if(i % 3 == 2){
            n += 2;

        }else{
            n += 3;
        }
    }
    console.log("\nHasil :\n" +hasil); opsi();;
}

function soal21(){
    let hasil = "";
    let n = 1;
    for ( let i = 1; i <= 10 ; i++){
        hasil += n + " ";
        n *= 2
    }
    console.log("\nHasil :\n" +hasil); opsi();
}

function soal22(faktorial){
    let hasil = 1;
    let f = "";
    for ( let i = faktorial; i >= 1; i--){
        hasil *= i;
        f += i;

        if (i > 1){
            f += "x";
        }
    }
    console.log("\nHasil dari "+ faktorial +"! :\n" + faktorial + "! = " + f + " = " +hasil); opsi();
}

function soal23(fibonaci){
    let hasil = "";
    let a = 1;
    let b = 1;
    do {
        hasil += a + " ";
        c=a+b; 
        a=b; 
        b=c; 
    } while (a <= fibonaci);
    console.log("\nHasil :\n" +hasil); opsi();;
}

function menu(){
    console.log("\n16. 1 5 3 7 5 9 7 11 9 13 11 15 , => n+4,n-2,...")
    console.log("17. 2 12 7 17 12 22 17 27 22 32 , => n+10,n-5,...")
    console.log("18. 5 2 7 4 9 6 11 8 13 10 15 12 , => n-3,n+5,...")
    console.log("19. 3 9 4 12 7 21 16 48 43 129 , => n*3,n-5,...")
    console.log("20. 1 2 4 7 8 10 13 14 16 19 20 22 25 , => n+1,n+2,n+3,...")
    console.log("21. 1 2 4 8 16 32 64 128 256 512")
    console.log("22. Bilangan faktorial")
    console.log("23. Bilangan fibonaci")
    console.log("0. close")

    rl.question("\nPilih fitur :",function(fitur){
        if(fitur == "16"){
            soal16();

        }else if(fitur == "17"){
            soal17();

        }else if(fitur == "18"){
            soal18();

        }else if(fitur == "19"){
            soal19();

        }else if(fitur == "20"){
            soal20();

        }else if(fitur == "21"){
            soal21();

        }else if(fitur == "22"){
            rl.question("Masukan angka yang mau di faktorialkan : ",function (faktorial){
                soal22(faktorial);
            })

        }else if ( fitur == "23"){
            rl.question("Angka maksimal dari bilangan fibonaci : ", function (fibonaci){
                soal23(fibonaci);
            })
        }else if ( fitur == "0"){
            console.log("Program ditutup");
            rl.close();
        }else {
            console.log("Pilihan tidak sesuai")
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
            rl.close();
        }else{
            console.log("Pilihan tidak sesuai");
            opsi();
        }
    })
}

menu();