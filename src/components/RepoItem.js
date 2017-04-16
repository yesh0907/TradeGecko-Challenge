import React from 'react';

const RepoItem = ({name, owner, avatar, clickAction, index}) => {
  return (
    <div onClick={clickAction}>
      <img src={avatar} alt="Avatar" width={100} height={100} id={index} />
      <p id={index}>{name} - {owner}</p>
    </div>
  )
}

export default RepoItem;
