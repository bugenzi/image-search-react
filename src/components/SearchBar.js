import React from 'react';


class SearchBar extends React.Component {
  state = {
    term: 'Write something here '
  }
  // It need to be arrow function or the this. wont work 
  onSubmintButton=(event)=>{
    event.preventDefault();
    //console.log(this.state.term,)

    this.props.onSubmit(this.state.term)

  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmintButton}className="ui from">
          <div className="ui icon input">
            <input className="prompt" type="text" value={this.state.term} placeholder="Search anything..." style={{ width: '1000px' }} onChange={e => this.setState({ term: e.target.value })} />
          </div>
          <div className="results" />
        </form>
      </div>
    )
  }

};

export default SearchBar;