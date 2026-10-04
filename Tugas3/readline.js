import readline from 'node:readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main(){
    biodata();
    menu();
}

function biodata(){
    console.log("\nNama : Miftakhul Khoir")
    console.log ("NIM : 251101027")
    console.log ("=====================")
}

function menu(){
    console.log("\n1. Penjumlahan");
    console.log("2. Pengurangan");
    console.log("3. Perkalian");
    console.log("4. Pembagian");
    console.log("5. Perpangkatan");
    console.log("6. Faktorial");
    console.log("0. Close");

    fitur();
}

function fitur(){
    rl.question("\nPilih fitur : ", function (menu){
        menu = parseInt(menu);

        if (menu <0 || menu >6){
            console.log("pilihan tidak tersedia");
            fitur();

        }
        
        
        if (menu === 0 ){
            console.log("Program ditutup")
            rl.close();

        } else if (menu === 6){

            rl.question("masukkan angkanya : ", function (a){
                a = parseInt(a);
                faktorial(a);
                or();
            })

        } else {
            rl.question("masukkan angka pertama : ", function (a){
                rl.question ("masukkan angka kedua : ", function (b){
                    a = parseInt(a);
                    b = parseInt(b);

                    if (menu === 1){
                        console.log("\n"+a+ " + " + b + " = " + penjumlahan(a,b));
                        or();
                        
                    } else if (menu === 2){
                        pengurangan(a,b);
                        or();

                    } else if (menu === 3){
                        perkalian(a,b);
                        or();
                        
                    } else if (menu === 4){
                        pembagian(a,b);
                        or();
                        
                    } else if (menu === 5){
                        pangkat(a,b);
                        or();
                        
                    } 

                });
            });
        }

        
    });
}

function penjumlahan (a,b){
    return (a+b);
}

function pengurangan(a,b){
    console.log("\n"+a+" - "+b+" = "+(a-b));
}

function perkalian(a,b){
    console.log("\n"+a+" x "+b+" = "+(a*b));
}

function pembagian(a,b){
    console.log("\n"+a+" / "+b+" = "+(a/b));
}

function pangkat(a,b){
    let hasil = 1;
    for (let i = b ; i>=1; i--){
        hasil *=a;
    }
    console.log("\n"+a+" / "+b+" = "+ hasil);
}

function faktorial(a){
    let hasil = 1;
    for (let i = a; i>=1 ;i--){
        hasil *=i
    }
    console.log("\n"+a + "! = "+ hasil);
}

function or(){
    console.log("\n1. Menu");
    console.log("0. Close");

    rl.question("Pilih fitur : ", function (last){

        last = parseInt(last);

        if (last === 1){
            menu();
        } else if (last === 0){
            console.log("Program ditutup");
            rl.close();
        } else{
            console.log("Pilihan tidak tersedia");
            or();
        }
    });
}

main();