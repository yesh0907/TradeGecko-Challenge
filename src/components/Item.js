import React, { Component } from 'react';

class Item extends Component {
  render() {
    const {name, owner, avatar} = this.props;
    return (
        <div>
          <img src={avatar} alt="Avatar" width={100} height={100} />
          <p>{name} - {owner}</p>
        </div>
    );
  }
}

export default Item;
