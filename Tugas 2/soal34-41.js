function soal34() {
    let posisiX = 0;
    let maxX = 114;

    setInterval(function () {
        console.clear();

        console.log(" ".repeat(posisiX) + "0");

        if (posisiX == maxX) {
            posisiX = 0;
        } else {
            posisiX++;
        }

    }, 100);
}

function soal35() {
    let posisiX = 0;
    let maxX = 114;
    let arah = 1;

    setInterval(function () {
        console.clear();

        console.log(" ".repeat(posisiX) + "0");

        posisiX += arah;

        if (posisiX >= maxX) {
            arah = -1;
        } else if (posisiX <= 0) {
            arah = 1;
        }

    }, 100);
}

function soal36() {
    let posisiX = 0;
    let posisiY = 20;
    let maxX = 114;

    setInterval(function () {
        console.clear();

        console.log(
            "\n".repeat(posisiY) +
            " ".repeat(posisiX) +
            "0"
        );

        if (posisiX == maxX) {
            posisiX = 0;
        } else {
            posisiX++;
        }

    }, 100);
}

function soal37() {
    let posisiX = 0;
    let posisiY = 20;
    let maxX = 114;
    let arah = 1;

    setInterval(function () {
        console.clear();

        console.log(
            "\n".repeat(posisiY) +
            " ".repeat(posisiX) +
            "0"
        );

        posisiX += arah;

        if (posisiX >= maxX) {
            arah = -1;
        } else if (posisiX <= 0) {
            arah = 1;
        }

    }, 100);
}

function soal38() {
    let posisiY = 0;
    let maxY = 20;

    setInterval(function () {
        console.clear();

        console.log("\n".repeat(posisiY) + "0");

        if (posisiY == maxY) {
            posisiY = 0;
        } else {
            posisiY++;
        }

    }, 100);
}

function soal39() {
    let posisiY = 0;
    let maxY = 20;
    let arah =1;

    setInterval(function () {
        console.clear();

        console.log("\n".repeat(posisiY) + "0");

        posisiY += arah;

        if (posisiY >= maxY) {
            arah = -1;
        } else if (posisiY <= 0) {
            arah = 1;
        }

    }, 100);
}

function soal40() {
    let posisiY = 0;
    let maxY = 20;
    let posisiX =114;

    setInterval(function () {
        console.clear();

        console.log(
            "\n".repeat(posisiY) + 
            " ".repeat(posisiX) +
            "0"
        );

        if (posisiY == maxY) {
            posisiY = 0;
        } else {
            posisiY++;
        }

    }, 100);
}

function soal41() {
    let posisiY = 0;
    let maxY = 20;
    let arah =1;
    let posisiX =114;

    setInterval(function () {
        console.clear();

        console.log(
            "\n".repeat(posisiY) +
            " ".repeat(posisiX) + 
            "0"
        );

        posisiY += arah;

        if (posisiY >= maxY) {
            arah = -1;
        } else if (posisiY <= 0) {
            arah = 1;
        }

    }, 100);
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function menu(){
    console.log("\n34. kiri atas => kanan atas & kiri atas  => kanan atas")
    console.log("35. kiri atas => kanan atas & kanan atas => kiri atas")
    console.log("36. kiri bawah => kanan bawah & kiri bawah => kanan bawah")
    console.log("37. kiri bawah => kanan bawah & kanan bawah => kiri bawah")
    console.log("38. kiri atas => kiri bawah & kiri atas => kiri bawah")
    console.log("39. kiri atas => kiri bawah & kiri bawah => kiri atas")
    console.log("40. kanan atas => kanan bawah & kanan atas => kanan bawah")
    console.log("41. kanan atas => kanan bawah & kanan bawah => kanan atas")
    console.log("0. close")

    rl.question("\nPilih fitur :",function(fitur){
        if(fitur == "34"){
            soal34();

        }else if(fitur == "35"){
            soal35();

        }else if(fitur == "36"){
            soal36();

        }else if(fitur == "37"){
            soal37();

        }else if(fitur == "38"){
            soal38();

        }else if(fitur == "39"){
            soal39();

        }else if(fitur == "40"){
            soal40();
        }else if ( fitur == "41"){
            soal41();
        }else if ( fitur == "0"){
            console.log("Program ditutup");
            rl.close();
        }else {
            console.log("Pilihan tidak sesuai")
            menu();
        }
    })

}

menu();