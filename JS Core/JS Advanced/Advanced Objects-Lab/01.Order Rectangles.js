function solve(input){
    let rectangles=[];

    for (let line of input) {
        rectangles.push(createRect(line[0],line[1]))
    }

    rectangles.sort((a,b) => a.compareTo(b));

    function createRect(width,height) {
        let rect={
            width,
            height,
            area:()=>rect.width*rect.height,
            compareTo:function (other) {
                let result=other.area()-rect.area();

                if(result===0){
                    return other.width-rect.width;
                } else{
                    return result;
                }
            }
        };

        return rect;
    }

   return rectangles
}

solve([[10,5],[5,12]])