const bcrypt=require("bcrypt")
let password="12345"
let salt=bcrypt.genSaltSync(14)
let hashed_password=bcrypt.hashSync(password,salt)
console.log(hashed_password);

let password2="12345"
let is_same=bcrypt.compareSync(password2,hashed_password)
console.log(is_same);


