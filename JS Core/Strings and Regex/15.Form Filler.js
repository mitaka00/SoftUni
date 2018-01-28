function solve(username,email,tel,arr) {
    for (let el of arr) {
        el=el.replace(/<![A-Za-z]+!>/g,username);
        el=el.replace(/<@[A-Za-z]+@>/g,email);
        el=el.replace(/<\+[A-Za-z]+\+>/g,tel);

        console.log(el)
    }
}