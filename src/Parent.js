import React from "react";
import Child from "./Child.js";
import Sibling from "./Sibling.js";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      color: "000"
    };
  }

  updateParent = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  updateSibling = () => {
    this.setState(prevState => {
      return { color: `${Math.floor(Math.random() * Math.floor(999))}` };
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <Sibling color={this.state.color} />
        <Child
          updateParent={this.updateParent}
          updateSibling={this.updateSibling}
        />
      </div>
    );
  }
}

export default Parent;
