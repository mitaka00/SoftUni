function solve(string,delimeter){
    let result=string.split(delimeter).filter(x=>x);

    console.log(result.join('\n'))
}
solve('One-Two-Three-Four-Five',
    '-'
)