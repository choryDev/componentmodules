import React from 'react';

import "./avata.scss";

const AvataComponent = ({ ...state }) => {

  const {
    className,
    children,

    name,
    value,
    id,
    alt,
    src,
    size,
    color,

    onClick,
    onDoubleClick,
    onMouseOver,
    onMouseUp,
  } = state;

  const style = {
    width: size,
    height: size
  }

  return (
    <div>
      {!src ?
        <div
          name={name}
          value={value}
          id={id}
          alt={alt}
          style={style}
          onClick={onClick}
          onDoubleClick={onDoubleClick}
          onMouseOver={onMouseOver}
          onMouseUp={onMouseUp}
          className={
            `avata
        ${!color ? 'yellow' : color}`}
        >
          <div className='avataInContent'>
            {children}
          </div>
        </div> :
        <img
          name={name}
          value={value}
          id={id}
          alt={alt}
          src={src}
          size={size}
          width={size}
          height={size}
          onClick={onClick}
          onDoubleClick={onDoubleClick}
          onMouseOver={onMouseOver}
          onMouseUp={onMouseUp}
          className={
            `avata
        ${!className ? '' : className}`
          } >
        </img >}
    </div>

  );
};

export default AvataComponent;