let funcHolder={}

let observerMenu={
    addObserver:(name,func)=>{
        funcHolder[name]=func
    },
    executeObserver:(name,param)=>{
        funcHolder[name](param)
    }
}

export default observerMenu