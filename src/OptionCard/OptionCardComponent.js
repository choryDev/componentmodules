import React from 'react';
import Avata from '../Avata/AvataComponent'
import "./optioncard.scss";

const OptionCardComponent = ({ ...state }) => {

  const {
    className,

    avatarsize,
    avatarsrc,
    //아바타 안에 들어갈 내용
    avatarchildren,

    title,
    subtitle,
    date,
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
        `optioncard
        ${!color ? '' : color}
        ${!className ? '' : className}`
      }>
      <div className="optioncard-avatar">
        <Avata size={avatarsize} src={avatarsrc} children={avatarchildren}></Avata>
      </div>
      <div className="optioncard-title">
        <span>{title}</span><span>{subtitle}</span>
      </div>
      <div className="optioncard-date">
        <span>{date}</span>
      </div>
    </div>
  );
};

OptionCardComponent.defaultProps = {
  avatarsize: "70px",
};

export default OptionCardComponent;