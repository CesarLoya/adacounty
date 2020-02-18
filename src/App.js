import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringEntered: ""
    };
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleClearClick = event => {
    event.preventDefault();
    this.setState({
      stringEntered: ""
    });
  };
  
  handleCountButtonClick = event => {
    event.preventDefault();
    const stringCounter = this.state.stringEntered;
    console.log("stringCount word entered is:", this.state.stringEntered);

    stringCounter.split(" ");
    //Removes beginning and end double Quotes
    const stringNoQuotes = stringCounter.replace(/^"(.*)"$/, "$1");
    console.log("No Quotes String: ", stringNoQuotes);

    this.setState({
      stringCounter: stringNoQuotes.length
    });
  };

  handleReverseButtonClick = event => {
    event.preventDefault();
    event.persist();
    console.log("String entered is:", this.state.stringEntered);
    const reverseString = this.state.stringEntered

      .split("")
      .reverse()
      .join("");

    this.setState({
      reverseString: reverseString
    });
  };

  render() {
    const { stringEntered } = this.state;
    return (
      <div className="App">
        <h1>Ada County REACT Project</h1>
        <p>Entered String: {stringEntered}</p>

        <p>
          <input
            ref={this.inputStringRef}
            type="text"
            placeholder="Enter a string." required
            name="stringEntered"
            onChange={this.handleInputChange}
            value={stringEntered}
          />
        </p>

        <p>
          <button onClick={this.handleReverseButtonClick}>
            Reverse string
          </button>
        </p>
        <h2>The reverseString is: {this.state.reverseString}</h2>

        <p>
          <button onClick={this.handleCountButtonClick}>
            Count string characters
          </button>
        </p>
        <h3>The stringCharacterCount is: {this.state.stringCounter}</h3>

        <p>
          <button onClick={this.handleClearClick}>Clear</button>
        </p>
      </div>
    );
  }
}

export default App;
