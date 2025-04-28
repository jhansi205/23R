export const Child=(props)=>{
    const{title,date}=props.movie
    
    
    return(
        <>
   <h1>{props.movie.title}</h1>
   <h1>{props.movie.date}</h1>
   {props.movie.hero.map((name)=>{
     return <h1>{name}</h1>
   })}
        </>
    )
}