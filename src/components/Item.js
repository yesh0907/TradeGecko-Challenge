import React, { Component } from 'react';

class Item extends Component {
  render() {
    const {name, owner, avatar, clickAction, index} = this.props;
    return (
        <div onClick={clickAction}>
          <img src={avatar} alt="Avatar" width={100} height={100} id={index} />
          <p id={index}>{name} - {owner}</p>
        </div>
    );
  }
}

export default Item;
