import React, { Component } from 'react';

class TestPage extends Component {
  
  constructor(props) {
   
    super(props);
    
    this.state = {value: '', outputValue: ''}; 

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

flatten(data) {
      //Convert String to JSON object
      data = JSON.parse(data);
      var result = {};

      //path = path to terminal value
      //format of JSON = path: terminal value


      function recurse (terminalValue, path) {
        
        //checks if the terminal value is an object (meaning that if the terminal value has "{}" within it) 
        //if it does it enters if, else the current terminalValue is added to reslt as is
        if (Object(terminalValue) === terminalValue) {
          var isEmpty = true;
          
          //iterating through keys subPath of JSON object terminalValue
          for (var subPath in terminalValue) {
              isEmpty = false;
              //if path is empty, send back the subPath as is 
              //if the subPath has elements, iterate through them concatenating each to the path, while adding each to result
              //eg. If there's a { it returns path.subPath (eg. = "c.d"), if not it returns subPath alone(eg. = "b")

              //path is passed into the recurse statement only when it occurs before a chain. 
              //path is then used for concatenating each of the subPaths (elements within the '{}')on to path
              recurse(terminalValue[subPath], path ? path+"."+subPath : subPath);
          }
          if (isEmpty)
              result[path] = {};
        } else {
          // every time a terminal value is reached, recurse is called and subsequently, as it is not a 
          // json object but rather key/value, it comes down here as we continue to build 'result'
          result[path] = terminalValue;
        }
      }

      recurse(data, "");

      //Stringify JSON object
      result = JSON.stringify(result);
      //Formats the flattened JSON to output expected
      result = result.replace(/\{/g, "{\n    ")
                     .replace(/,/g, ",\n    ")
                     .replace(/:/g, ": ")
                     .replace(/\}/g, "\n}");


      return result;
  }

  handleSubmit(event) { 
    // Parsing of JSON

    this.block = this.state.value;    
    let parsedToJson = JSON.parse(this.block.trim());

    if(this.block.trim())
      try {
        parsedToJson = JSON.parse(this.block.trim());
      } catch(e) {
        console.log(e)
      }


    console.log('parsed to json : ' + parsedToJson); 
    console.log('stringified parsed to json : ' + JSON.stringify(parsedToJson));
    var result = this.flatten(this.block);
    this.setState({outputValue: result});

    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table className = "tableFormat">
          <tr>
            <th>Input JSON for Parsing</th>
            <th>Flattened JSON</th>            
          </tr>
          <tr>
            <td><textarea className = "text-Area" type="text" style={formStyle.textArea} value={this.state.description} onChange={this.handleChange}/></td>
            <td><textarea className = "text-Area" type={"text"} style={formStyle.textArea} value={this.state.outputValue} /></td>
          </tr>
        </table>
        <input type="submit" value="Submit" />
      
      </form>
    );
  }
}

const formStyle = {
  textArea: {
    border: 5,
    boxShadow: 'none',
    margin: 5,
    overflow: 'hidden',
    resize: 'none',
    width: 300,
    height: 300,
    ariaHidden: 'true',
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    width: 70,
    marginLeft: 18,
    marginRight: 5,
  },
}


export default TestPage;

