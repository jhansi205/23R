function phoneNumber(phn){
    const phone_number=`(${phn[0]}${phn[1]}${phn[2]}) ${phn[3]}${phn[4]}${phn[5]}-${phn[6]}${phn[7]}${phn[8]}${phn[9]}`
    return phone_number;
}
let phn=[5,5,5,5,5,5,5,5,5,5]
console.log(phoneNumber(phn));
