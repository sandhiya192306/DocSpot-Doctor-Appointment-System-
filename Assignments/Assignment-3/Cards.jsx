import React from 'react' 
import data from'./assets/newData.json' 
const Cards = () => { return( <div className='bg'> 
<div className=' -card d-flex flex-wrap justify-content-arround' >
     {data.map((d,i)=>{ return ( <div className='card m-5' key={i} style={{width:"300px"}}> 
        <img className='card-img-top' src={d.picture} alt='this is an image'></img> 
        <div className='card-body'> <h1 className='card-title'>{d.name.title} {d.name.first}</h1> 
        <p className='card-text mb-0'>{d.cell}</p> 
        <p className='card-textmb-0'>{d.location.city},{location.state}</p> 
        <p className='card-text'>{d.location.country}</p> 
        <a href='#'className=''>{d.email}</a> </div> </div> ) })} </div> </div> 
        ) } 
export default Cards