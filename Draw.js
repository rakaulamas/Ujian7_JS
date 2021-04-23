// Gambar Persegi
function persegi(sisi){
    let hasil = '';
    for(let i = 0; i < sisi; i++){
        for(let j = 0; j < sisi; j++){
            hasil += ' *';
        }
        hasil += '\n';
    }
        return hasil;
}
console.log('Gambar Persegi : ')
console.log(persegi(5));

//Segitiga Biasa
function segitiga(bentuk) {
    let hasil1 = '';
    for (let a = 0; a < bentuk; a++) {
        for (let b = 0; b <= a; b++) {
            hasil1 += ' *';
        }
        hasil1 += '\n';
    }
    return hasil1;
}
console.log('Gambar Segitiga : ')
console.log(segitiga(5));

//Segitiga Terbalik
function segitigaterbalik(pjg) {
    let hasil2 = '';
    for (let x = 0; x < pjg; x++){
        for (let y = pjg; y > x; y--){
            hasil2 +=' *';
        }
        hasil2 += '\n';
    }
    return hasil2;
} 
console.log('Gambar Segitiga Terbalik :')
console.log(segitigaterbalik(5)); 


//Selang seling
function selangseling(sisi1){
    let hasil3 ='';
    for (let m = 0; m < sisi1; m++){
        for (let n = 0; n < sisi1; n++){
            if ((m+n) % 2 != 0){
                hasil3 +=' *';
            } else{
                    hasil3 +=' !';
                }
            } 
            hasil3 += '\n';
            }
    return hasil3;
}
console.log('Gambar Selang Seling : ')
console.log(selangseling(5));


