import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  tick() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }

  componentDidMount(){
    setInterval(()=>{this.tick()},1000)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>{this.state.count} secounds</div>
        </header>
      </div>
    );
  }
}

export default App;
