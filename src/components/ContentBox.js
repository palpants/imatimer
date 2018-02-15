import React from 'react';

class ContentBox extends React.Component {
  render() {
    return (
      <div className="iat-content-box">
        {props.children}
      </div>
    )
  }
}

export default ContentBox;
