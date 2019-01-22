import React from 'react';

import "./departmentcard.scss";

const DepartmentCardComponent = ({ ...state }) => {

  const {
    className,
    //색상
    backgroundcolor,
    //제목
    title,
    //아이콘
    like,
    bookmark,
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
        `departmentcard
        ${!className ? '' : className}`
      }>
      <div className={`departmentcardMain
       ${!backgroundcolor ? 'blue' : backgroundcolor}`}>
        <span>{title}</span>
      </div>
      <div className={`departmentCardIcon`}>
        <i className={`fas fa-heart
        ${!like ? 'iconColorOff' : 'iconColorOn'}`}></i>
        <i className={`fas fa-bookmark
          ${!bookmark ? 'iconColorOff' : 'iconColorOn'}`}></i>
        <i className={`fas fa-bookmark`}></i>
      </div >
    </div >
  );
};

export default DepartmentCardComponent;