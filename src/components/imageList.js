import React from 'react';
import './imageList.css';
import ImageCard from './imageCard';


const ImageList=(props)=>{
    //adding for each to ImageCard the prop values of id and image 
const images=props.image.map((image)=>{
    return(<ImageCard key={image.id} image={image} />  )
    
})



    return(
    <div className="imageDiv">{images}</div>
    )
}

export default ImageList;