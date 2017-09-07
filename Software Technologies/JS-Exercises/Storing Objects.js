function solve(input) {
    let allStudents=[];

    for(let student of input){
        let tokens=student.split(" -> ");

       let [name, age, grade]=tokens;

       let studentInfo={
           name:name,
           age:age,
           grade:grade
       };

       allStudents.push(studentInfo);
    }

    for(student of allStudents){
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade}`);
    }
}
