import React from "react";

class Sibling extends React.Component {
  render() {
    return (
      <div>
        <span
          style={{ backgroundColor: `#${this.props.color}` }}
          className="dot"
        >
          {" "}
        </span>
      </div>
    );
  }
}

export default Sibling;
