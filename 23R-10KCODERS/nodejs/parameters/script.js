var user="jhansi";
var password="lucky1"
async function api_call() {
    let data=await fetch("http://localhost:3002",{
        method:"POST",
        body:JSON.stringify({user,password})
    })
    let res=await data
    console.log(res);
    
}
api_call()