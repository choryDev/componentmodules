import React from 'react';

import "./button.scss";

const ButtonComponent = ({ ...state }) => {

  const {
    className,
    children,
    color,
    name,
    value,
    id,
    onClick,
    onDoubleClick,
    onMouseOver,
    onMouseUp,
  } = state;

  return (
    <button
      name={name}
      value={value}
      id={id}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      className={
        `button
        ${!color ? 'yellow' : color}
        ${!className ? '' : className}`
      }>
      {children}
    </button>
  );
};

export default ButtonComponent;