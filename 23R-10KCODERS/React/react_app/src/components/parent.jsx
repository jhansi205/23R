import {Child} from"./child"

 function Parent(){
    let details={
        title:"svsc",
        date:"7/3/2025",
        hero:["mahesh","venkatesh","prakash"]
    }
    return(
        <>
       
        <Child movie={details}/>
        </>
    )
}
export default Parent