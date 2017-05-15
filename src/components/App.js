import React, { Component } from 'react';
import load from '../actions'
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  shouldComponentUpdate(nextProps,nextState){
    console.log("> shouldComponentUpdate(nextProps, nextState)");
    console.log("nextProps: ");
    console.log(nextProps);
    console.log("nextState: ");
    console.log(nextState);
    return true; /* need return true/false */
  }
  handleClick(e) {
    e.preventDefault();
    this.props.dispatch(load());
  }

  render() {
    const { items, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <button onClick={this.handleClick}>Load</button>
        <p>
          {lastUpdated &&
            <span>  
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>
          }
        </p>
        {isFetching && items.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && items.length === 0 &&
          <h2>Empty.</h2>
        }
        {items.length > 0 &&
           <ul>
            {items.map((item, i) =>
              <li key={i}>{item.title}</li>
            )}
          </ul>
        }

      </div>
    );
  }
}

export default App;
