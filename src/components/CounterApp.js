import React, { Component } from 'react';

class CounterApp extends Component {
state = {
    count: 0,
  };
  
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });

  };

  render() {
    return (
      <React.Fragment>
        <section className="showcase">
            <div className="overlay">
                <h2 style={{color: '#c7fff8'}}>Increment || Decrement a number to infinity</h2>
                <span style={{fontSize: 50 , fontFamily: 'serif'}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button style={{fontSize: 30, fontWeight: 'bold'}}
                onClick={this.handleIncrement}
                className="btn btn-secondary btn-sm m-5"
                >
                Increment
                </button>
                <button style={{fontSize: 30, fontWeight: 'bold'}}
                onClick={this.handleDecrement}
                className="btn btn-secondary btn-sm"
                >
                Decrement
                </button>
            </div>
        </section>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "btn btn-sm m-2 btn-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state; // object destructuring
    return count === 0 ? "Zero" : count; // ternary operator
  }
}


export default CounterApp;