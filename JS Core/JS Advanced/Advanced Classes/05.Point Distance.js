class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    static distance(firstPoint,secondPoint){
        return Math.sqrt(Math.pow(firstPoint.x-secondPoint.x,2)+Math.pow(firstPoint.y-secondPoint.y,2));
    }
}

let firstPoint=new Point(2,3);
let secondPoint=new Point(3,4);

console.log(Point.distance(firstPoint, secondPoint));