let student={
    name:"jhansi",
    age:18,
    grade:"A"
};
function studentDetails(student){
   return `Name: [${student.name}],Age:[${student.age}],Grade:[${student.grade}]`;
}
console.log(studentDetails((student)));
