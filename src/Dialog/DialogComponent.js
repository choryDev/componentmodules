import React from 'react';
import "./dialog.scss";
import Button from '../Button/ButtonComponent'
import Textfield from '../TextField/TextFieldComponent'
const DialogComponent = ({ ...state }) => {

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
    //버튼 정보
    btnValue,
    btnName,
    btnId,
    //아이콘액션
    icononClick,
    iconDoubleClick,
    //인풋
    inptValue,
    inptName,
    inptId,
    inptautoFocus,
    inptplaceholder,
    inptreadOnly,
    inptrequired,
    inptmaxLength,
    inptsize,
    inptsrc,
    inptdisabled,
    inptautoComplete,
    inptform,
    //인풋 이벤트
    inptonClick,
    inptonChange,
    inptonDoubleClick,
    inptonKeyDown,
    inptonKeyPress,
    inptonKeyUp,
    inptonMouseDown,
    inptonMouseUp,
    inptonSelect,
    //인풋 클래스
    inptColor,
    inptClassName,
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
        `dialogroot
        ${!color ? '' : color}
        ${!className ? '' : className}`
      }>
      <i
        onClick={icononClick}
        onDoubleClick={iconDoubleClick}
        className="fas fa-times-circle"></i>
      <div className="dialogTitle">
        <span>{title}</span>
        <span>{subtitle}</span>
      </div>
      <div className="dialogInput">
        <input
          name={inptName}
          value={inptValue}
          id={inptId}
          autoFocus={inptautoFocus ? true : false}
          placeholder={inptplaceholder}
          readOnly={inptreadOnly ? inptreadOnly : false}
          required={inptrequired ? inptrequired : false}
          maxLength={inptmaxLength}
          size={inptsize}
          src={inptsrc}
          disabled={inptdisabled ? true : false}
          autoComplete={inptautoComplete ? inptautoComplete : 'off'}
          form={inptform}

          onClick={inptonClick}
          onChange={inptonChange}
          onDoubleClick={inptonDoubleClick}
          onKeyDown={inptonKeyDown}
          onKeyPress={inptonKeyPress}
          onKeyUp={inptonKeyUp}
          onMouseDown={inptonMouseDown}
          onMouseUp={inptonMouseUp}
          onSelect={inptonSelect}
          className={
            `  ${!inptColor ? '' : inptColor}
               ${!inptClassName ? '' : inptClassName}`
          } />
        <Button
          btnValue={btnValue}
          btnName={btnName}
          btnId={btnId}
          onClick={btnonClick}
          onDoubleClick={btnonDoubleClick}
        >{btntitle}</Button>
      </div>

    </div>
  );
};
export default DialogComponent;