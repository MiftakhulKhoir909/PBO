const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


function pola1(){
    let hasil = "";
    for (let i = 1; i <= 6; i++){
        if (i <= 1){
            for (let j = 1; j <= 11; j++){
                hasil += "*";
            }

        } else {

            for (let j = 1; j <= 6 - (i - 1); j++){
                hasil += "*";
            }

            for (let j = 1; j <= 2 * (i - 1) - 1; j++){
                hasil += " ";
            }

            for (let j = 1; j <= 6 - (i - 1); j++){
                hasil += "*";
            }
        }

        hasil += "\n";
    }

    console.log("\n"+hasil);
}

function pola2(){
    let hasil = "";
    for ( let i = 1 ; i <= 6 ;i++){
        for( let j = 1 ; j<=6-i ;j++){
            hasil+= " "
        }

        for( let j = 1; j<=(2*i-1);j++){
            hasil +="*"
        }
        hasil += "\n"
    }
    console.log("\n"+hasil)
}

function pola3(){
    let hasil = "";
    for ( let i = 1 ; i <= 3 ;i++){
        for( let j = 1 ; j<=i ;j++){
            hasil+= "*"
        }
        hasil += "\n"
    }
    for ( let i = 1 ; i <= 3 ;i++){
        for( let j = 1 ; j<=3-i ;j++){
            hasil+= " "
        }
        for(let j =1; j<=i ; j++){
            hasil += "*"
        }
        hasil += "\n"
    }
    console.log("\n"+hasil)
}

function pola4(){
    let hasil = "";
    for (let i = 6; i >= 1; i--){
        if (i <= 1){
            for (let j = 1; j <= 11; j++){
                hasil += "*";
            }

        } else {

            for (let j = 1; j <= 6 - (i - 1); j++){
                hasil += "*";
            }

            for (let j = 1; j <= 2 * (i - 1) - 1; j++){
                hasil += " ";
            }

            for (let j = 1; j <= 6 - (i - 1); j++){
                hasil += "*";
            }
        }

        hasil += "\n";
    }

    console.log("\n"+hasil);
}

function pola5(){
    let hasil = "";
    for ( let i = 6 ; i >= 1 ;i--){
        for( let j = 1 ; j<=6-i ;j++){
            hasil+= " "
        }

        for( let j = 1; j<=(2*i-1);j++){
            hasil +="*"
        }
        hasil += "\n"
    }
    console.log("\n"+hasil)
}

function pola6(){
    let hasil = "";
    for ( let i = 1 ; i <= 3 ;i++){
        for( let j = 1 ; j<=3-i ;j++){
            hasil+= " "
        }
        for(let j =1; j<=i ; j++){
            hasil += "*"
        }
        hasil += "\n"
    }    
    for ( let i = 1 ; i <= 3 ;i++){
        for( let j = 1 ; j<=i ;j++){
            hasil+= "*"
        }
        hasil += "\n"
    }

    console.log("\n"+hasil)
}

function pola7(){
    let hasil ="";
    for(let i = 1; i<=6 ;i++){
        if (i>=6) {

            for(let j = 1; j<=11;j++){
                hasil+= "0";
            } 

        }else {
            for(let j = 1; j<=11;j++){
                if(j<=1){
                    hasil += "0";
                }else {
                    hasil += "*"
                }
            }
        }

        hasil += "\n";
    }   
    console.log("\n"+hasil);
}

function pola8(){
    let hasil ="";
    for(let i = 1; i<=6 ;i++){
        hasil+= "0";
        
        for(let j = 1; j<=10;j++){
            if (i >=1 && i<=5){
                hasil +="*"
            } else{
                hasil+= "0"
            }
        } 
        hasil += "\n";
    }   
    console.log("\n"+hasil);
}

function pola9(){
    let hasil ="";
    for(let i = 1; i<=6 ;i++){
        if (i<=5) {
            for(let j = 1; j<=11;j++){
                if(j<=10){
                    hasil += "*";
                }else {
                    hasil += "0"
                }
            }
        }else {
            for(let j = 1; j<=11;j++){
                hasil+= "0";
            }
        }

        hasil += "\n";
    }   
    console.log("\n"+hasil);
}

function pola10(){
    let hasil="";

    for(let i =5; i>=1; i--){
        for (let j =1 ; j<=i; j++){
            hasil += "*";
        }
        hasil +="\n"
    }    
    
    for( let i = 2;i<=5;i++){
        for ( let j = 1; j<=i ; j++){
            hasil += "*"
        }
        hasil += "\n";
    }

    console.log("\n"+hasil);
}

function pola11(){
    let hasil ="";
    for(let i = 1; i<=6 ;i++){
        if (i<=1) {

            for(let j = 1; j<=11;j++){
                hasil+= "0";
            } 

        }else {
            for(let j = 1; j<=11;j++){
                if(j<=1){
                    hasil += "0";
                }else {
                    hasil += "*"
                }
            }
        }

        hasil += "\n";
    }   
    console.log("\n"+hasil);
}

function pola12(){
    let hasil ="";
    for(let i = 1; i<=6 ;i++){
        if (i<=1) {

            for(let j = 1; j<=11;j++){
                hasil+= "0";
            } 

        }else {
            for(let j = 1; j<=11;j++){
                if(j<=10){
                    hasil += "*";
                }else {
                    hasil += "0"
                }
            }
        }

        hasil += "\n";
    }   
    console.log("\n"+hasil);
}

function pola13() {
    let hasil = "" ;

    for(let i = 1 ; i <= 6; i ++){
        for( let j = 1; j<=i; j ++){
            hasil += "0";
        }
        for(let j=1;j<=7-i;j++){
            hasil+= "*"
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);
}

function pola14() {
    let hasil = "" ;

    for(let i = 1 ; i <= 6; i ++){
        for( let j = 1; j<=i; j ++){
            hasil += "*";
        }
        for(let j=1;j<=7-i;j++){
            hasil+= "0"
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);
}

function pola15() {
    let hasil = "" ;

    for(let i = 6 ; i >= 1; i --){
        for( let j = 1; j<=i; j ++){
            hasil += "0";
        }
        for(let j=1;j<=7-i;j++){
            hasil+= "*"
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);
}

function pola16() {
    let hasil = "" ;

    for(let i = 6 ; i >= 1; i --){
        for( let j = 1; j<=i; j ++){
            hasil += "0";
        }
        for(let j=1;j<=7-i;j++){
            hasil+= "*"
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);
}

function pola17() {
    let hasil = "" ;

    for(let i = 6 ; i >= 1; i --){
        for( let j = 1; j<=i; j ++){
            hasil += "0";
        }

        hasil += "*"

        for (let j= 1;j<=6-i;j++){
            hasil+="0";
        }

        hasil += "\n";
    }
    console.log("\n"+hasil);
}

function pola18(){
    let hasil = "";
    for( let i = 1; i<=6 ;i++){
        for(let j=1; j<=i-1;j++){
            hasil += "0";
        }
        hasil += "*";
        for (let j=1; j<=7-i;j++){
            hasil += "0";
        }
        hasil += "\n";
    }
    console.log("\n"+hasil);
}

function pola19(){
    let hasil = "";
    for (let i = 1; i <= 6; i++){
        for(let j = 1 ; j <=7 ; j ++){
            if(i==1 || i==6){
                hasil += "0";

            }else{

                if(j==1||j==7){
                    hasil += "0"

                }else{
                    hasil += "*"

                }
            }

        }
        hasil += "\n";
    }
    console.log("\n"+hasil);
}

function pola20(){
    let hasil = "";
    for (let i = 1; i <= 6; i++){
        for(let j = 1 ; j <=7 ; j ++){
            if (i %3 ==1){
                hasil += "0";
            }else if(i %3 ==2){
                hasil += "*";
            }else{
                hasil += "=";
            }

        }
        hasil += "\n";
    }
    console.log("\n"+hasil);
}

function menu(){
    console.log("1. Tampilkan pola ke-1")
    console.log("2. Tampilkan pola ke-2")
    console.log("3. Tampilkan pola ke-3")
    console.log("4. Tampilkan pola ke-4")
    console.log("5. Tampilkan pola ke-5")
    console.log("6. Tampilkan pola ke-6")
    console.log("7. Tampilkan pola ke-7")
    console.log("8. Tampilkan pola ke-8")
    console.log("9. Tampilkan pola ke-9")
    console.log("10. Tampilkan pola ke-10")
    console.log("11. Tampilkan pola ke-11")
    console.log("12. Tampilkan pola ke-12")
    console.log("13. Tampilkan pola ke-13")
    console.log("14. Tampilkan pola ke-14")
    console.log("15. Tampilkan pola ke-15")
    console.log("16. Tampilkan pola ke-16")
    console.log("17. Tampilkan pola ke-17")
    console.log("18. Tampilkan pola ke-18")
    console.log("19. Tampilkan pola ke-19")
    console.log("20. Tampilkan pola ke-20")
    console.log("0. close")

    rl.question("\nPilih pola :",function(fitur){
        if(fitur == "1"){
            pola1();
            opsi();
        }else if(fitur == "2"){
            pola2();
            opsi();
        }else if(fitur == "3"){
            pola3();
            opsi();
        }else if(fitur == "4"){
            pola4();
            opsi();
        }else if(fitur == "5"){
            pola5();
            opsi();
        }else if(fitur == "6"){
            pola6();
            opsi();
        }else if(fitur == "7"){
            pola7();
            opsi();
        }else if(fitur == "8"){
            pola8();
            opsi();
        }else if(fitur == "9"){
            pola9();
            opsi();
        }else if(fitur == "10"){
            pola10();
            opsi();
        }else if(fitur == "11"){
            pola11();
            opsi();
        }else if(fitur == "12"){
            pola12();
            opsi();
        }else if(fitur == "13"){
            pola13();
            opsi();
        }else if(fitur == "14"){
            pola14();
            opsi();
        }else if(fitur == "15"){
            pola15();
            opsi();
        }else if(fitur == "16"){
            pola16();
            opsi();
        }else if(fitur == "17"){
            pola17();
            opsi();
        }else if(fitur == "18"){
            pola18();
            opsi();
        }else if(fitur == "19"){
            pola19();
            opsi();
        }else if(fitur == "20"){
            pola20();
            opsi();
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
            console.log("Program diakhiri\n");
            rl.close();
        }else{
            console.log("Pilihan tidak sesuai");
            opsi();
        }
    })
}


menu();