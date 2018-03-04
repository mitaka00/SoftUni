function solve() {
    let obj = {
        extend: function(template){
            for(let parentProp of Object.keys(template)){
                if(template.hasOwnProperty(parentProp)) {
                    if (typeof(template[parentProp]) === "function") {
                        Object.getPrototypeOf(obj)[parentProp] = template[parentProp];
                    } else {
                        obj[parentProp] = template[parentProp];
                    }
                }
            }
        }
    };

    return obj;
}