function caculateDob(dob){
    var today=new Date()
    var birthDate=new Date(dob)
    var age=today.getFullYear-birthDate.getFullYear
   return age
    
}
console.log(caculateDob('2001-05-02'));
