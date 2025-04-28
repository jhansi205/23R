// const Welcome=(prop)=>{
//     console.log(prop.key_word,prop.mobile)
//     return(
//         <h1>
//          hello, {prop.key_city}
//          <p>{prop.key_age}</p>
//         </h1>
      
//     )
// }
// export default Welcome


const Welcome=({key_city,key_age})=>{
    console.log(key_city)
    return(
        <h1>
         hello, {key_city}
         <p>{key_age}</p>
        </h1>
      
    )
}
export default Welcome