

let verdadero = true;

let promiseItem = (task) =>{
    
    return new Promise ((resolve, reject)=>{
        if (verdadero){
            setTimeout(()=>{
                resolve(task)
            }, 2000);
        }else{
            reject("Error")
        }
        
    });
    
}
export default promiseItem;