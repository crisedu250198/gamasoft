 let is_ok = true;
export const customFetch = (timeout,data) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(is_ok){
                resolve(data)
            }else
            {
                reject('No se pudo cargar los productos..');
            }
            },timeout);
    });
}