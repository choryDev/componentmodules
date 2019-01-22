import React from 'react';

import "./maincard.scss";

const MainCardComponent = ({ ...state }) => {

  const {
    className,
    //색상
    colorbar,
    backgroundcolor,
    //제목
    title,
    subtitle,
    //
    name,
    value,
    id,
    onClick,
    onDoubleClick,
    onMouseOver,
    onMouseUp,
  } = state;

  return (
    <div
      name={name}
      value={value}
      id={id}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      className={
        `
        ${!backgroundcolor ? '' : backgroundcolor}
        ${!className ? '' : className}`
      }>
      <div className={`mainCardBar
        ${!colorbar ? 'blue' : colorbar}
      `} />
      <div className="mainCardContent">
        <span> {title}</span>
        <span> {subtitle}</span>
      </div>

    </div>
  );
};

export default MainCardComponent;