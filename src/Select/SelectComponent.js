import React from 'react';

import "./select.scss";

const SelectComponent = ({ ...state }) => {

  const {
    className,
    color,
    children,

    type,
    value,
    name,
    id,
    autoFocus,
    disabled,
    form,

    onClick,
    onChange,
    onDoubleClick,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onSelect,
  } = state;

  return (
    <select
      type={type}
      value={value}
      name={name}
      id={id}
      autoFocus={autoFocus ? true : false}
      disabled={disabled ? true : false}
      form={form}

      onClick={onClick}
      onChange={onChange}
      onDoubleClick={onDoubleClick}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
      onSelect={onSelect}
      className={
        `select
        ${!color ? 'gray' : color}
        ${!className ? 'select' : className}`
      }>
      {children}
    </select >
  );
};

export default SelectComponent;