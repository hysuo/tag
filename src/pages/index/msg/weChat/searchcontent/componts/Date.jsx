import React, { Component } from 'react'
import {DateContainer} from './Styled'
import { List, Calendar } from 'antd-mobile';
import  connect  from './connect';

const extra = {
  '2017/07/15': { info: '今天', disable: true },
};
const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 0)] = { info: '今天', disable: false };
Object.keys(extra).forEach((key) => {
  const info = extra[key];
  const date = new Date(key);
  if (!Number.isNaN(+date) && !extra[+date]) {
    extra[+date] = info;
  }
});

@connect
 class DateComponent extends Component {
  originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

  constructor(props) {
    super(props);
    this.state = {
      show: false,
      config: {},
    };
  }

  renderBtn(zh, en, config = {}) {
    return (
      <List.Item arrow="horizontal"
        onClick={() => {
          document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
          this.setState({
            show: true,
            config,
          });
        }}
      >
        {this.state.en ? en : zh}
      </List.Item>
    );
  }


  onSelectHasDisableDate = (dates) => {
    console.warn('onSelectHasDisableDate', dates);
  }

  onConfirm = (startTime, endTime) => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime,
      endTime,
    });
  }

  onCancel = () => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
    });
  }
  getDateExtra = date => extra[+date];
  render() {
    this.count=false
    this.resDate =''
    if(this.state.startTime){
      const d = new Date(this.state.startTime)
      this.resDate = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()
    }
    return (
      <div>
        <List className="calendar-list" style={{ backgroundColor: 'white' }}>
          {this.renderBtn(`选择日期:${this.resDate}`, 'Select Date', { type: 'one' })}
        </List>
        <Calendar
          {...this.state.config}
          visible={this.state.show}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          onSelectHasDisableDate={this.onSelectHasDisableDate}
          getDateExtra={this.getDateExtra}
          defaultDate={now}
        />
        <DateContainer>
          {
            this.props.list.map((item,index)=>{
              if(item.time === this.resDate){
                this.count=true
                return(
                  <li key={index}>
                    <img src={item.img} alt=""/>
                    <span className={item.active ? item.active : ''}>{item.content}</span>
                  </li>
                )
              }
            })
          }
          {
            !this.count && <div className='toast'>该日暂无消息</div>
          }

        </DateContainer>
      </div>
    );
  }
}
export default DateComponent