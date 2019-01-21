import React from 'react';

import "./option.scss";

const OptionComponent = ({ ...state }) => {

  const {
    className,
    color,
    children,
    value,
    name,
    id,
    key,

    onClick,
    onDoubleClick,

  } = state;

  return (
    <option
      value={value}
      name={name}
      id={id}
      key={key}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={
        `option
        ${!color ? '' : color}
        ${!className ? 'option' : className}`
      }>
      {children}
    </option >
  );
};

export default OptionComponent;