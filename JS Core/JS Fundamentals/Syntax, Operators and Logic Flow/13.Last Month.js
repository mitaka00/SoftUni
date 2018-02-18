function solve(input){
    let day=input[0];
    let month=input[1];
    let year=input[2];

    let newDate=new Date(year,month-1,0)
    let daysCount=newDate.getDate();

    console.log(daysCount);
}
solve([17, 3, 2002]);