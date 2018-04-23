import React from "react";
class Child extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.updateParent}>
          Click Me to Update Parent
        </button>
      </div>
    );
  }
}

export default Child;
