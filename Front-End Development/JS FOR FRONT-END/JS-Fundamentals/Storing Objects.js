function StoringObijects(input){
    let students=[];

    for(let i=0;i<input.length;i++){
        let currentArr=input[i].split(" -> ");

        let name=currentArr[0];
        let age=currentArr[1];
        let grade=currentArr[2];

        let studentInfo={
            name:name,
            age:age,
            grade:grade
        };

        students.push(studentInfo)
    }

    for(let student of students){
        console.log(`Name: ${student.name}`);
        console.log(`Age: ${student.age}`);
        console.log(`Grade: ${student.grade}`);
    }
}


