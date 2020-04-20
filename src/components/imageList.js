import React from 'react';
import './imageList.css';
import ImageCard from './imageCard';


const ImageList=(props)=>{
const images=props.image.map((image)=>{
    return(<ImageCard key={image.id} image={image} />  )
    
})
   
    console.log(props.image)


    return(
    <div className="imageDiv">{images}</div>
    )
}

export default ImageList;