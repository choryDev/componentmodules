import React, { Component } from 'react';
import Button from './Button/ButtonComponent'
import Textfield from './TextField/TextFieldComponent'
import Avata from './Avata/AvataComponent'
import Select from './Select/SelectComponent'
import Option from './Option/OptionComponent'
import OptionCard from './OptionCard/OptionCardComponent'
import CompanyOption from './CompanyOption/CompanyOptionComponent'
import MainCard from './MainCard/MainCardComponent'
import MainCardAdd from './MainCardAdd/MainCardAddComponent'
import DepartmentCard from './DepartmentCard/DepartmentCardComponent'
import DepartmentCardAdd from './DepartmentCardAdd/DepartmentCardAddComponent'
import Dialog from './Dialog/DialogComponent'

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [11, 22, 33, 44, 55]
    }
  }
  render() {
    return (
      <div >
        컴포넌트화
        <Button className="test" color="yellow" >버튼</Button>
        <Textfield className="test"></Textfield>
        <Avata size="100px"
          src="http://mblogthumb1.phinf.naver.net/MjAxNzA2MzBfMjk0/MDAxNDk4NzUzNDU1OTk1.LoYKnjr3DxB1wTjWCVPl0w-_PC5VzVVwYhOUhBfUKb8g._zJclG_GdJ8vLL3gbCwq0TM3D43Xbc5TaA4W5VAmZfAg.JPEG.ryokofan90/%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C2.JPG?type=w2">
        </Avata>
        <Select>
          {this.state.array.map((obj, i) => {
            return (
              <Option key={i} value="">{obj}</Option>
            )
          })}
        </Select>
        <OptionCard avatarchildren="딱딱" title="철수" subtitle="안뇽zzz" date="11/22"></OptionCard>
        <CompanyOption className="companyCard"
          title="CompanyA" subtitle="is inviting you to the company" btntitle="Accept"></CompanyOption>
        <MainCard className="maincard" title="CompanyA" subtitle="부제 이러쿵 저러쿵"> </MainCard>
        <MainCardAdd className="maincard" color="fontred"></MainCardAdd>
        <DepartmentCard className="departmentcard" title="dev"></DepartmentCard>
        <DepartmentCardAdd className="departmentcard" color="fontgray"></DepartmentCardAdd>
        <Dialog className="dialog" title="철수" subtitle="안뇽zzz" btntitle="SAVE"></Dialog>
      </div >
    );
  }
}

export default App;
