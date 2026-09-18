const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function grade(nilai){

    let G = "";

    if (nilai >= 90 && nilai <= 100){
        G = "A";
    } else if (nilai >= 80 && nilai <= 89){
        G = "B";
    } else if (nilai >= 70 && nilai <= 79){
        G = "C";
    } else if (nilai >= 60 && nilai <= 69){
        G = "D";
    } else if (nilai >= 0 && nilai <= 59){
        G = "E";
    } else {
        console.log("Nilai tidak valid");
        return;
    }

    console.log("\nNilai anda : " + nilai + "\nGrade : " + G);
}

function pola1(baris){
    let hasil ="";
    for( let i = 1; i<=baris;i++){
        for(let j = 1; j<=i;j++){
            hasil += "*";
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);  
}

function pola2(baris){
    let hasil ="";
    for( let i = 1; i<=baris;i++){
        for(let j = baris; j>=i;j--){
            hasil += "*";
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);  
}

function pola3(baris){
    let hasil ="";
    for( let i = 1; i<=baris;i++){
        for(let j = baris; j>=i;j--){
            hasil+= " ";
        }
        for(let j = 1; j<=i;j++){
            hasil += "*";
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);  
}

function pola4(baris){
    let hasil ="";
    for( let i = baris; i>=1;i--){
        for(let j = baris; j>=i;j--){
            hasil+= " ";
        }
        for(let j = 1; j<=i;j++){
            hasil += "*";
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);  
}

function pola5(baris){
    let hasil ="";
    for( let i = 1; i<=baris;i++){
        for(let j = baris; j>=i;j--){
            hasil+= " ";
        }
        for(let j = 1; j<=(2*i-1);j++){
            hasil += "*";
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);  
}

function pola6(baris){
    let hasil ="";
    for( let i = baris; i>=1;i--){
        for(let j = baris; j>=i;j--){
            hasil+= " ";
        }
        for(let j = 1; j<=(2*i-1);j++){
            hasil += "*";
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);  
}

function menu(){
    console.log("\n1. Hitung grade nilai A-E")
    console.log("2. Tampilkan pola bintang  ke 1")
    console.log("3. Tampilkan pola bintang  ke 2")
    console.log("4. Tampilkan pola bintang  ke 3")
    console.log("5. Tampilkan pola bintang  ke 4")
    console.log("6. Tampilkan pola bintang  ke 5")
    console.log("7. Tampilkan pola bintang  ke 6")
    console.log("0. close")

    rl.question(
        "\nPilih fitur : ",
        function(fitur){
            if( fitur == "0"){
                console.log("Program diakhiri");
                rl.close();

            }else if(fitur == "1"){
                rl.question("Masukkan nilai : ",function(nilai){
                    grade(nilai);
                    opsi();
                })

            }else if( fitur == "2"){
                rl.question("Tentukan jumlah baris :", function(baris){
                    pola1(baris);
                    opsi();
                })
            }else if( fitur == "3"){
                rl.question("Tentukan jumlah baris :", function(baris){
                    pola2(baris);
                    opsi();
                })
            }else if( fitur == "4"){
                rl.question("Tentukan jumlah baris :", function(baris){
                    pola3(baris);
                    opsi();
                })
            }else if( fitur == "5"){
                rl.question("Tentukan jumlah baris :", function(baris){
                    pola4(baris);
                    opsi();
                })
            }else if( fitur == "6"){
                rl.question("Tentukan jumlah baris :", function(baris){
                    pola5(baris);
                    opsi();
                })
            }else if( fitur == "7"){
                rl.question("Tentukan jumlah baris :", function(baris){
                    pola6(baris);
                    opsi();
                })
            }else {
                console.log("Fitur tidak tersedia : ");
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