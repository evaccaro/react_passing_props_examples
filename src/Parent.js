import React from "react";
import Child from "./Child.js";
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  updateParent = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <Child updateParent={this.updateParent} />
      </div>
    );
  }
}

export default Parent;
