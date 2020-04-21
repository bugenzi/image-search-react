import React from 'react';
//import ReactDOM from 'react-dom';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './imageList';
import './app.css'
//import { render } from '@testing-library/react';


class App extends React.Component{
    // Set state to be array so I can read the leangth
    state={images:[]};

     onSearchSubmit = async(term)=>{
    const respons=  await unsplash.get('/search/photos',{params:{query:term}})

    this.setState({images:respons.data.results})
    };
    
    
    render(){
    return(
        <div className="ui container" style={{marginTop:"10px"}}
        ><SearchBar onSubmit={this.onSearchSubmit}/>
        Total images found : {this.state.images.length}
        <ImageList image={this.state.images}/>
        </div>
    )
}
}

export default App;