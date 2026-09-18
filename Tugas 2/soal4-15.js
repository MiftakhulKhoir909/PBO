    function soal4(){
        let hasil ="";
        for(let i = 1;i<=6;i++){
            for(let j =1;j<=i;j++){
                hasil+=i;
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }

    function soal5(){
        let hasil ="";
        for(let i = 6;i>=1;i--){
            for(let j =1;j<=i;j++){
                hasil+=i;
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }

    function soal6(){
        let hasil ="";
        for(let i = 1; i<=6; i++){
            for(let j= 1; j<=i; j++){
                hasil+=j;
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }

    function soal7(){
        let hasil="";
        for( let i = 6; i>=1; i--){
            for(let j=i; j>=1; j--){
                hasil += j;
            }
        }   
        console.log("\n Hasil : \n"+hasil);
    }

    function soal8(){
        let hasil = "";
        for(let i=1;i<=6;i++){
            for(let j=1;j<=i;j++){
                if(i%2==1){
                    hasil+=i
                }
                else{
                    hasil+=j
                }
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }

    function soal9(){
        let hasil = "";
        for(let i=1;i<=6;i++){
            for(let j=1;j<=i;j++){
                if(i%2==1){
                    hasil+=j
                }
                else{
                    hasil+=i
                }
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }
    
    function soal10(){
        let hasil = "";
        for(let i=6;i>=1;i--){
            for(let j=i;j>=1;j--){
                if(i%2==0){
                    hasil+=j
                }
                else{
                    hasil+=i
                }
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }

    function soal11(){
        let hasil = "";
        for(let i=6;i>=1;i--){
            for(let j=1;j<=i;j++){
                if(i%2==0){
                    hasil+=i
                }
                else{
                    hasil+=j
                }
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }

    function soal12(){
        let hasil = "";
        for(let i=1; i<=9; i++){
            for(let j=1; j<=i; j++ ){
                if(i % 4 == 1){
                    hasil += i
                }
                else if(i%4==2){
                    hasil +=i
                }
                else{
                    hasil +=j
                } 
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }

    function soal13(){
        let hasil = "";
        for(let i=1; i<=9; i++){
            for(let j=1; j<=i; j++ ){
                if(i % 4 == 1){
                    hasil += j
                }
                else if(i%4==2){
                    hasil +=j
                }
                else{
                    hasil +=i
                } 
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }

    function soal14(){
        let hasil = "";
        for(let i=8; i>=1; i--){
            for(let j=i; j>=1; j-- ){
                if(i % 4 == 1){
                    hasil += j
                }
                else if(i%4==2){
                    hasil +=j
                }
                else{
                    hasil +=i
                } 
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }

    function soal15(){
        let hasil = "";
        for(let i=8; i>=1; i--){
            for(let j=i; j>=1; j-- ){
                if(i % 4 == 1){
                    hasil += i
                }
                else if(i%4==2){
                    hasil += i
                }
                else{
                    hasil += j
                } 
            }
        }
        console.log("\n Hasil : \n"+hasil);
    }
    

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function opsi(){
    rl.question("\n1.menu\n0.close\n",function (aHasil){
        if (aHasil == "1") {
            menu();

        } else if (aHasil == "0") {
            console.log("Program ditutup");
            rl.close();
            
        } else{
            console.log("Pilihan tidak tersedia");
            opsi();

        }
    })
}


function menu(){
    console.log("4. 122333444455555666666");
    console.log("5. 666666555554444333221");
    console.log("6. 112123123412345123456");
    console.log("7. 654321543214321321211");
    console.log("8. 112333123455555123456");
    console.log("9. 122123444412345666666");
    console.log("10. 654321555554321333211");
    console.log("11. 666666123454444123221");
    console.log("12. 122123123455555666666123456712345678999999999...");
    console.log("13. 112333444412345123456777777788888888123456789...");
    console.log("14. 888888887777777654321543214444333211");
    console.log("15. 876543217654321666666555554321321221");
    console.log("0. close")

    rl.question("Pilih fitur",function(fitur){
        if (fitur == "4") {
            soal4();
            opsi();

        }else if (fitur == "5") {
            soal5();
            opsi();

        }else if (fitur == "6") {
            soal6();
            opsi();

        }else if (fitur == "7") {
            soal7();
            opsi();

        }else if (fitur == "8") {
            soal8();
            opsi();

        }else if (fitur == "9") {
            soal9();
            opsi();

        }else if (fitur == "10") {
            soal10();
            opsi();

        }else if (fitur == "11") {
            soal11();
            opsi();

        }else if (fitur == "12") {
            soal12();
            opsi();

        }else if (fitur == "13") {
            soa13();
            opsi();

        }else if (fitur == "14") {
            soal14();
            opsi();

        }else if (fitur == "15") {
            soal15();
            opsi();

        }else if (fitur == "0") {
            rl.close();

        }else {
            console.log("\n Pilihan tidak tersedia\n");
            menu();

        }
   })
}

menu()