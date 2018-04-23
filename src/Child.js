import React from "react";

class Child extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.updateParent}>
          Click Me to Update Parent
        </button>
        <button onClick={this.props.updateSibling}>
          Click Me to Update My Sibling
        </button>
      </div>
    );
  }
}

export default Child;
