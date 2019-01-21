import React from 'react';

import "./textField.scss";

const ButtonComponent = ({ ...state }) => {

  const {
    className,
    color,

    type,
    value,
    name,
    id,
    autoFocus,
    placeholder,
    readOnly,
    required,
    maxLength,
    size,
    src,
    disabled,
    autoComplete,
    form,

    onClick,
    onChange,
    onDoubleClick,
    onKeyDown,
    onKeyPress,
    onKeyUp,
    onMouseDown,
    onMouseUp,
    onSelect,
  } = state;

  return (
    <input
      type={type}
      value={value}
      name={name}
      id={id}
      autoFocus={autoFocus ? true : false}
      placeholder={placeholder}
      readOnly={readOnly ? readOnly : false}
      required={required ? required : false}
      maxLength={maxLength}
      size={size}
      src={src}
      disabled={disabled ? true : false}
      autoComplete={autoComplete ? autoComplete : 'off'}
      form={form}

      onClick={onClick}
      onChange={onChange}
      onDoubleClick={onDoubleClick}
      onKeyDown={onKeyDown}
      onKeyPress={onKeyPress}
      onKeyUp={onKeyUp}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onSelect={onSelect}
      className={
        `textfield
        ${!color ? 'gray' : color}
        ${!className ? 'textfield' : className}`
      }>
    </input >
  );
};

export default ButtonComponent;