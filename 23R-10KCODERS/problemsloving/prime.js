// const is_prime = (num) => {
//     let fact = 0;
//         for (let i = 2; i < num; i++) {
//             if (num % i === 0) { 
//                 fact++; 
//                 break; 
//             }
//         }

//     if (fact == 0) {
//         return true; 
//     } else {
//         return false; 
//     }
// }

// let num = 12;
// let cont = false;

// if (num > 1) {
//     if (is_prime(num)) {
//         cont = true;
//     } else {
//         console.log("not prime");
//     }
// }

// if (cont) { 
//     let limit = 10;
//     while (limit > 0) {
//         num++;
//         if (is_prime(num)) {
//             console.log(num);
//             limit--;
//         }
//     }
// }



function is_prime(num) {
    let fact = 0;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) { 
                fact++; 
                break; 
            }
        }

    if (fact == 0) {
        return true; 
    } else {
        return false; 
    }
}

let num = 13;
let cont = false;

if (num > 1) {
    if (is_prime(num)) {
        cont = true;
    } else {
        console.log("not prime");
    }
}

if (cont) { 
    let limit = 10;
    while (limit > 0) {
        num++;
        if (is_prime(num)) {
            console.log(num);
            limit--;
        }
    }
}

