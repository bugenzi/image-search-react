import React from 'react';


const ImageList=(props)=>{
const images=props.image.map((img)=>{
    return(<img alt={img.description} key={img.id}src={img.urls.regular} />  )
    
})
   
    console.log(props.image)


    return(
    <div>{images}</div>
    )
}

export default ImageList;