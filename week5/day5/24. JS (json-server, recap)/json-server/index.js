import API_BASE_URL,{endpoints}form "..constants.js"

export async function getAll(endpoints){
    let obj ={
        data: null,
        error:null,
    };
    await axios
    .get(API_BASE_URL + endpoints)
    .then((result)=>{
        obj.data = result.data;
    })
    .catch((err)=>{
        obj.error = err;
    });
    return obj;
}

export async function getOne(endpoints,id){
    let obj ={
        data:null,
        error:null,
    };
    await axios
    .get(API_BASE_URL + endpoints +`?id=${id}`)
    .then((result)=>{
        obj.data = result.data;
    })
    .catch((err)=>{
        obj.error=err;
    });
    return obj;
}
export async function post(endpoints,)