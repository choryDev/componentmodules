import React from 'react';
import "./companyoption.scss";
import Button from '../Button/ButtonComponent'

const CompanyCardComponent = ({ ...state }) => {

  const {
    className,
    //앞에 들어갈 내용
    title,
    subtitle,
    //버튼에 들어갈 내용
    btntitle,
    //버튼액션
    btnonClick,
    btnonDoubleClick,
    //아이콘액션
    icononClick,
    iconDoubleClick,

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
        `companycard
        ${!color ? '' : color}
        ${!className ? '' : className}`
      }>
      <div className="companycard-title">
        <span>{title}</span><span>{subtitle}</span>
      </div>
      <div className="companycard-button-area">
        <i
          onClick={btnonClick}
          onDoubleClick={btnonDoubleClick}
          className="fas fa-times-circle"></i>
        <Button
          onClick={icononClick}
          onDoubleClick={iconDoubleClick}
          className="companycard-button">{btntitle}</Button>
      </div>
    </div>
  );
};
export default CompanyCardComponent;