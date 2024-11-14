var a = 4,
  b = 8,
  c = 2;
var greatest =
  a > b && a > c
    ? console.log(`${a} is greatest`)
    : b > c && b > a
    ? console.log(`${b} is greatest`)
    : console.log(`${c} is greatest`);
