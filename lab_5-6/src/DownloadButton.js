import React from "react";

class DownloadButton extends React.Component {
  render() {
    const { label, start } = this.props;
    return (
      <div>
        <button type="button" onClick={start} class="btn btn-dark">
          {" "}
          {label}{" "}
        </button>
      </div>
    );
  }
}

export default DownloadButton;
