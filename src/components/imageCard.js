import React from 'react';

class ImageCard extends React.Component {
//creating a react refrence
    constructor(props){
       super(props);
       this.state={spans:0}
       console.log(this.state)
       this.imageRef=React.createRef();
   }
   componentDidMount(){
      this.imageRef.current.addEventListener('load',this.setSpan);  
     }
     setSpan= ()=>{
         const height=this.imageRef.current.clientHeight;
         const span = Math.ceil(height/20); 
        
         this.setState({spans:span})
     }
   
    render() {
        //desctructuring of incoming props from imageList 
        const {urls ,description}=this.props.image;
        console.log(description)
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
            <img ref={this.imageRef} alt={description}
            src={urls.regular}
            
            />

            </div>

        );


    }


}
export default ImageCard;