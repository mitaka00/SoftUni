function solve(input) {
    let islands={
        'Tokelau':{
            'minx':8,
            'maxx':9,
            'miny':0,
            'maxy':1
        },
        'Tuvalu':{
            'minx':1,
            'maxx':3,
            'miny':1,
            'maxy':3
        },
        'Samoa':{
            'minx':5,
            'maxx':7,
            'miny':3,
            'maxy':6,
        },
        'Cook':{
            'minx':4,
            'maxx':9,
            'miny':7,
            'maxy':8
        },
        'Tonga':{
            'minx':0,
            'maxx':2,
            'miny':6,
            'maxy':8
        },

    };
    for (let i = 0; i < input.length; i+=2) {
        let x = input[i];
        let y = input[i + 1];

        let result = false;
        let name = '';

        for (let island in islands) {
            result = findTreasure(x, y, island);

            if (result === true) {
                name = island;
                break;
            }
        }

        if (result === true) {
            console.log(name)
        } else {
            console.log('On the bottom of the ocean')
        }
    }
    
    function findTreasure(x,y,island) {
        let minx=islands[island]['minx'];
        let maxx=islands[island]['maxx'];
        let maxy=islands[island]['maxy'];
        let miny=islands[island]['miny'];


        if(x>=minx && x<=maxx && y>=miny && y<maxy){
            return true;
        } else{
            return false;
        }
    }
}
solve([6, 4])