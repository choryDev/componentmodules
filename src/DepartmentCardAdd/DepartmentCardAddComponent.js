import React from 'react';

import "./departmentcardadd.scss";

const DepartmentCardAddComponent = ({ ...state }) => {

  const {
    className,
    //색상
    backgroundcolor,
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
    <div
      name={name}
      value={value}
      id={id}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onMouseOver={onMouseOver}
      onMouseUp={onMouseUp}
      className={
        `departmentcardaddroot
        ${!backgroundcolor ? '' : backgroundcolor}
        ${!className ? '' : className}`
      }>
      <i className={`fas fa-plus 
     ${!color ? 'fontgray' : color}`}></i>
    </div >
  );
};

export default DepartmentCardAddComponent;